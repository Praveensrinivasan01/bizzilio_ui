import React, { useState, useEffect } from "react";
 
const CENTER = 200;
const OUTER_R = 150;
const INNER_R = 80;
 
const DOTS = [
  {
    id: 1,
    r: 60, // inside inner circle
    angle: 45,
    label: "Inner Dot 1"
  },
  {
    id: 2,
    r: 120, // between inner and outer circle
    angle: 240, // moved to 8 o'clock
    label: "Inner Dot 2"
  }
];
 
function getDotXY(r, angleDeg) {
  const rad = (angleDeg - 90) * (Math.PI / 180);
  return {
    x: CENTER + r * Math.cos(rad),
    y: CENTER + r * Math.sin(rad)
  };
}
 
export default function RadarGradient({ style = {}, className = "" }) {
  const [angle, setAngle] = useState(0);
  const [popup, setPopup] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupFade, setPopupFade] = useState(false);
  const [popupXY, setPopupXY] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 767);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => (prev + 1) % 360);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  // Show popup for longer and fade out
  useEffect(() => {
    const found = DOTS.find(dot => {
      let diff = Math.abs(((angle - dot.angle + 360) % 360));
      if (diff > 180) diff = 360 - diff;
      return diff < 12;
    });
    if (found) {
      setPopup(found);
      setPopupVisible(true);
      setPopupFade(false);
      const { x, y } = getDotXY(found.r, found.angle);
      setPopupXY({ x, y });
      // Hide after 2s, fade out for 0.8s
      setTimeout(() => setPopupFade(true), 2000);
      setTimeout(() => setPopupVisible(false), 2800);
    }
  }, [angle]);

  return (
    <div
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        maxWidth: 400,
        maxHeight: 400,
        aspectRatio: "1/1",
        position: "relative", // for absolute popup
        ...style
      }}
      className={className}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid meet"
        style={{ display: "block" }}
      >
        {/* Radar sweep using CSS conic-gradient */}
        <foreignObject x={CENTER - OUTER_R} y={CENTER - OUTER_R} width={OUTER_R * 2} height={OUTER_R * 2} style={{ pointerEvents: "none" }}>
          <div
            style={{
              width: OUTER_R * 2,
              height: OUTER_R * 2,
              borderRadius: "50%",
              transform: `rotate(${angle}deg)`,
              background:
                "conic-gradient(from 0deg, " +
                "rgba(0,123,255,0.95) 0deg, " +
                "rgba(0,123,255,0.75) 120deg, " +
                "rgba(0,123,255,0.35) 190deg, " +
                "rgba(157,195,248,0.10) 300deg, " +
                "rgba(162,190,230,0.03) 350deg, " +
                "rgba(226,240,255,0) 360deg" +
                ")",
              opacity: 0.15, // lowered opacity
              mixBlendMode: "lighten"
            }}
          />
        </foreignObject>
        {/* Outer and inner circles */}
        <circle cx={CENTER} cy={CENTER} r={OUTER_R} fill="none" stroke="#9dc3f8" strokeWidth={2} />
        <circle cx={CENTER} cy={CENTER} r={INNER_R} fill="none" stroke="#9dc3f8" strokeWidth={2} />
        {/* Dots */}
        {DOTS.map(dot => {
          const { x, y } = getDotXY(dot.r, dot.angle);
          return <circle key={dot.id} cx={x} cy={y} r={5} fill="blue" />;
        })}
        {/* Inner circle label */}
        <text
          x={CENTER}
          y={CENTER - INNER_R + 140}
          textAnchor="middle"
          fontSize="16"
          fill="#070707ff"
        //   fontWeight="bold"
          fontFamily="Arial, sans-serif"
        >
          5km
        </text>
        {/* Outer circle label */}
        <text
          x={CENTER}
          y={CENTER - OUTER_R + 270}
          textAnchor="middle"
          fontSize="16"
          fill="#0a0a0aff"
        //   fontWeight="bold"
          fontFamily="Arial, sans-serif"
        >
          10km
        </text>
        {/* Center dot */}
        <circle cx={CENTER} cy={CENTER} r={8} fill="#c2c2beff" stroke="#fff" strokeWidth={2} />
        {/* Popup removed from SVG */}
      </svg>
      {/* Popup as absolutely positioned div */}
      {popup && popupVisible && (
        <div
          style={{
            position: "absolute",
            left:
              isMobile && popup.r === 60
                ? popupXY.x - 90 // move further left for mobile inner dot
                : popupXY.x + 20,
            top: popupXY.y - 10,
            background: "linear-gradient(135deg, #f8fbff 0%, #eaf1fa 100%)",
            borderRadius: "8px",
            border: "1px solid #e3eaf3",
            boxShadow: "0 8px 32px rgba(60, 120, 180, 0.18), 0 1.5px 8px rgba(0,0,0,0.10)",
            padding: "18px 20px 14px 18px",
            width: "210px",
            minHeight: "70px",
            fontFamily: "Arial, sans-serif",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            opacity: popupFade ? 0 : 1,
            transition: "opacity 0.8s"
          }}
        >
          {/* Top section */}
          <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", marginBottom: "10px", gap: "14px" }}>
            {/* Box Image */}
            <img src="https://img.icons8.com/fluency/96/box.png" alt="Box" style={{ width: "36px", height: "36px", borderRadius: "6px", boxShadow: "0 2px 8px rgba(0,0,0,0.07)" }} />
            {/* Details */}
            <div style={{ flex: 1, display: "flex", justifyContent: "space-between", textAlign: "center", gap: "10px" }}>
              <div>
                <p style={{ margin: "2px 0", fontSize: "12px", color: "#5a6a7a", fontWeight: 500 }}>Weight</p>
                <h4 style={{ margin: 0, fontSize: "14px", fontWeight: 600, color: "#2a3a4a" }}>15kg</h4>
              </div>
              <div>
                <p style={{ margin: "2px 0", fontSize: "12px", color: "#5a6a7a", fontWeight: 500 }}>Distance</p>
                <h4 style={{ margin: 0, fontSize: "14px", fontWeight: 600, color: "#2a3a4a" }}>
                  {popup.r === 60 ? "5km" : "10km"}
                </h4>
              </div>
            </div>
          </div>
          {/* Footer */}
          <div style={{
            borderTop: "1px solid #e3eaf3",
            paddingTop: "7px",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "12px",
            color: "#4a5a6a"
          }}>
            <span style={{ color: "#7a8a9a", fontWeight: 500 }}>Delivery Charge</span>
            <span style={{ fontWeight: 700, fontSize: "15px", color: "#1a2a3a" }}>
              {popup.r === 60 ? "₹ 75.00" : "₹ 100.00"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

