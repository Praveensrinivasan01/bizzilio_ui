import React, { useEffect, useRef, useState } from "react";

// Draws the pentagon path with an animated "draw" effect and animated fill when complete
function MovingTrackerPath({ speed = 0.005, fillSpeed = 0.005, imgRef }) {
  const [drawLength, setDrawLength] = useState(0);
  const [fillPercent, setFillPercent] = useState(0); // 0 to 1 for fill animation
  const pathRef = useRef();
  const containerRef = useRef();
  const [inView, setInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [screenType, setScreenType] = useState("desktop");

  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });
  function updateDimensions() {
      console.log("rect",imgRef)
    if (imgRef.current) {
      const rect = imgRef.current.getBoundingClientRect();
      console.log("rect",rect)
      setImgSize({ width: rect.width, height: rect.height });
    }
  }

  useEffect(() => {
    console.log("event listener")
    window.addEventListener("resize", updateDimensions());
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Responsive media query for multiple breakpoints
  // useEffect(() => {
  //   function handleResize() {
  //     const width = window.innerWidth;
  //     if (width <= 767) setScreenType("mobile");
  //     else if (width <= 1024) setScreenType("tablet");
  //     else setScreenType("desktop");
  //   }
  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // Pentagon points and viewBox for each screen type
  let points;
if (screenType === "mobile") {
  // smaller pentagon, centered
  const cx = imgSize.width / 2;
  const cy = imgSize.height / 2;
  const rx = imgSize.width * 0.35; // horizontal radius
  const ry = imgSize.height * 0.35; // vertical radius
  points = [
    { x: cx,           y: cy - ry * 0.5 }, // top
    { x: cx + rx * 0.5, y: cy - ry * 0.15 }, // top right
    { x: cx + rx * 0.45, y: cy + ry * 0.35 }, // bottom right
    { x: cx - rx * 0.45, y: cy + ry * 0.35 }, // bottom left
    { x: cx - rx * 0.5, y: cy - ry * 0.15 }, // top left
  ];
} else if (screenType === "tablet") {
  const cx = imgSize.width / 2;
  const cy = imgSize.height / 2;
  const rx = imgSize.width * 0.45;
  const ry = imgSize.height * 0.45;
  points = [
    { x: cx,           y: cy - ry * 0.5 }, // top
    { x: cx + rx * 0.5, y: cy - ry * 0.15 }, // top right
    { x: cx + rx * 0.45, y: cy + ry * 0.35 }, // bottom right
    { x: cx - rx * 0.45, y: cy + ry * 0.35 }, // bottom left
    { x: cx - rx * 0.5, y: cy - ry * 0.15 }, // top left
  ];
} else {
  // desktop
   const cx = imgSize.width / 2;
  const cy = imgSize.height / 2;
  const rx = imgSize.width * 0.5;
  const ry = imgSize.height * 0.5;
  points = [
    { x: cx,           y: cy - ry * 0.5 }, // top
    { x: cx + rx * 0.5, y: cy - ry * 0.15 }, // top right
    { x: cx + rx * 0.45, y: cy + ry * 0.35 }, // bottom right
    { x: cx - rx * 0.45, y: cy + ry * 0.35 }, // bottom left
    { x: cx - rx * 0.5, y: cy - ry * 0.15 }, // top left
  ];
}

  const viewBox = `0 0 ${imgSize.width} ${imgSize.height}`;

  // Build pentagon path
  const pathD =
    points
      .map((pt, i) => (i === 0 ? `M${pt.x},${pt.y}` : `L${pt.x},${pt.y}`))
      .join(" ") + " Z";

  // Intersection Observer to trigger animation when in view
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Animate the path drawing
  useEffect(() => {
    if (!inView) {
      setDrawLength(0);
      setFillPercent(0);
      return;
    }
    let running = true;
    let length = pathRef.current ? pathRef.current.getTotalLength() : 0;
    function animate() {
      setDrawLength((prev) => {
        let next = prev + speed * length;
        if (next > length) next = length;
        return next;
      });
      if (running && drawLength < length) requestAnimationFrame(animate);
    }
    if (drawLength < (pathRef.current?.getTotalLength() || 0)) {
      requestAnimationFrame(animate);
    }
    return () => {
      running = false;
    };
    // eslint-disable-next-line
  }, [inView, speed, drawLength]);

  // Animate the fill after path is complete
  useEffect(() => {
    if (
      pathRef.current &&
      Math.abs(drawLength - pathRef.current.getTotalLength()) < 1 &&
      fillPercent < 1
    ) {
      let running = true;
      function animateFill() {
        setFillPercent((prev) => {
          let next = prev + fillSpeed;
          if (next > 1) next = 1;
          return next;
        });
        if (running && fillPercent < 1) requestAnimationFrame(animateFill);
      }
      requestAnimationFrame(animateFill);
      return () => {
        running = false;
      };
    }
    // eslint-disable-next-line
  }, [drawLength, fillPercent, fillSpeed]);

  // Detect if path is fully drawn
  const isComplete =
    pathRef.current &&
    Math.abs(drawLength - pathRef.current.getTotalLength()) < 1;

  // Animated fill using a radial gradient mask
  // The mask is a circle that grows from the center to cover the pentagon
  const center = {
    x:
      (Math.min(...points.map((p) => p.x)) +
        Math.max(...points.map((p) => p.x))) /
      2,
    y:
      (Math.min(...points.map((p) => p.y)) +
        Math.max(...points.map((p) => p.y))) /
      2,
  };
  const maxR = Math.max(
    ...points.map((p) => Math.hypot(p.x - center.x, p.y - center.y))
  );
  const fillRadius = fillPercent * maxR;

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 2, // ensure above the image
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox={viewBox}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          left: 0,
          top: 0,
          pointerEvents: "none",
          zIndex: 2,
          mixBlendMode: "multiply",
          display: "block",
        }}
      >
        <defs>
          <linearGradient id="pentagonGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1976D2" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#90caf9" stopOpacity="0.5" />
          </linearGradient>
          <mask id="pentagonFillMask">
            <rect width="300" height="300" fill="black" />
            {isComplete && fillPercent > 0 && (
              <circle cx={center.x} cy={center.y} r={fillRadius} fill="white" />
            )}
          </mask>
        </defs>
        {/* Animated path */}
        <path
          ref={pathRef}
          d={pathD}
          stroke="#1976D2"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray={
            pathRef.current ? pathRef.current.getTotalLength() : 1000
          }
          strokeDashoffset={
            pathRef.current
              ? pathRef.current.getTotalLength() - drawLength
              : 1000
          }
          opacity={1}
        />
        {/* Animated fill with mask */}
        {isComplete && (
          <path
            d={pathD}
            fill="url(#pentagonGradient)"
            opacity="0.3"
            stroke="none"
            mask="url(#pentagonFillMask)"
          />
        )}
      </svg>
    </div>
  );
}

export default MovingTrackerPath;
