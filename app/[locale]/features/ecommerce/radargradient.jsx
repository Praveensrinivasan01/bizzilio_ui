// import React, { useState, useEffect, useRef } from "react";

// const DOTS = [
//   { id: 1, r: 60, angle: 45, label: "Inner Dot 1" },
//   { id: 2, r: 120, angle: 240, label: "Inner Dot 2" },
// ];

// export default function RadarGradient({ style = {}, className = "" }) {
//   const containerRef = useRef(null);
//   const [size, setSize] = useState(400); // dynamic size
//   const [CENTER, setCENTER] = useState(200);
//   const [OUTER_R, setOUTER_R] = useState(150);
//   const [INNER_R, setINNER_R] = useState(80);

//   const [angle, setAngle] = useState(0);
//   const [popup, setPopup] = useState(null);
//   const [popupVisible, setPopupVisible] = useState(false);
//   const [popupFade, setPopupFade] = useState(false);
//   const [popupXY, setPopupXY] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     function handleResize() {
//       if (containerRef.current) {
//         const w = containerRef.current.offsetWidth;
//         setSize(w);
//         setCENTER(w / 2);
//         setOUTER_R(w * 0.375); // 150/400 ratio
//         setINNER_R(w * 0.2); // 80/400 ratio
//       }
//     }
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setAngle((prev) => (prev + 1) % 360);
//     }, 20);
//     return () => clearInterval(interval);
//   }, []);

//   function getDotXY(r, angleDeg) {
//     const rad = (angleDeg - 90) * (Math.PI / 180);
//     return {
//       x: CENTER + r * Math.cos(rad),
//       y: CENTER + r * Math.sin(rad),
//     };
//   }

//   useEffect(() => {
//     const found = DOTS.find((dot) => {
//       let diff = Math.abs((angle - dot.angle + 360) % 360);
//       if (diff > 180) diff = 360 - diff;
//       return diff < 12;
//     });
//     if (found) {
//       setPopup(found);
//       setPopupVisible(true);
//       setPopupFade(false);
//       const { x, y } = getDotXY(found.r, found.angle);
//       setPopupXY({ x, y });
//       setTimeout(() => setPopupFade(true), 2000);
//       setTimeout(() => setPopupVisible(false), 2800);
//     }
//   }, [angle, CENTER, OUTER_R, INNER_R]);

//   return (
//     <div
//       ref={containerRef}
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         width: "100%",
//         maxWidth: 400,
//         aspectRatio: "1/1",
//         margin: "0 auto",
//         position: "relative",
//         ...style,
//       }}
//       className={className}
//     >
//       <svg
//         width="100%"
//         height="100%"
//         viewBox={`0 0 ${size} ${size}`}
//         preserveAspectRatio="xMidYMid meet"
//         style={{ display: "block" }}
//       >
//         {/* Radar sweep */}
//         <foreignObject
//           x={CENTER - OUTER_R}
//           y={CENTER - OUTER_R}
//           width={OUTER_R * 2}
//           height={OUTER_R * 2}
//           style={{ pointerEvents: "none" }}
//         >
//           <div
//             style={{
//               width: "100%",
//               height: "100%",
//               borderRadius: "50%",
//               transform: `rotate(${angle}deg)`,
//               background:
//                 "conic-gradient(from 0deg, " +
//                 "rgba(0,123,255,0.95) 0deg, " +
//                 "rgba(0,123,255,0.75) 120deg, " +
//                 "rgba(0,123,255,0.35) 190deg, " +
//                 "rgba(157,195,248,0.10) 300deg, " +
//                 "rgba(162,190,230,0.03) 350deg, " +
//                 "rgba(226,240,255,0) 360deg" +
//                 ")",
//               opacity: 0.15,
//               mixBlendMode: "lighten",
//             }}
//           />
//         </foreignObject>

//         {/* Circles */}
//         <circle
//           cx={CENTER}
//           cy={CENTER}
//           r={OUTER_R}
//           fill="none"
//           stroke="#9dc3f8"
//           strokeWidth={2}
//         />
//         <circle
//           cx={CENTER}
//           cy={CENTER}
//           r={INNER_R}
//           fill="none"
//           stroke="#9dc3f8"
//           strokeWidth={2}
//         />

//         {/* Dots */}
//         {/* {DOTS.map(dot => {
//           const { x, y } = getDotXY(dot.r, dot.angle);
//           return <circle key={dot.id} cx={x} cy={y} r={size * 0.0125} fill="blue" />; // radius proportional
//         })} */}
//         {DOTS.map((dot) => {
//           // For mobile, reduce radius slightly
//           const dotR = size * 0.0125;
//           const rAdjusted = size <= 767 ? dot.r * 0.85 : dot.r; // move dots slightly inward on mobile
//           const { x, y } = getDotXY(rAdjusted, dot.angle);
//           return <circle key={dot.id} cx={x} cy={y} r={dotR} fill="blue" />;
//         })}

//         {/* Labels */}
//         <text
//           x={CENTER}
//           y={CENTER - INNER_R + size * 0.35}
//           textAnchor="middle"
//           fontSize={size * 0.04}
//           fill="#070707ff"
//           fontFamily="Arial, sans-serif"
//         >
//           5km
//         </text>
//         <text
//           x={CENTER}
//           y={CENTER - OUTER_R + size * 0.675}
//           textAnchor="middle"
//           fontSize={size * 0.04}
//           fill="#0a0a0aff"
//           fontFamily="Arial, sans-serif"
//         >
//           10km
//         </text>

//         {/* Center dot */}
//         <circle
//           cx={CENTER}
//           cy={CENTER}
//           r={size * 0.02}
//           fill="#c2c2beff"
//           stroke="#fff"
//           strokeWidth={2}
//         />
//       </svg>

//       {/* Popup */}
//       {popup && popupVisible && (
//         // <div
//         //   style={{
//         //     position: "absolute",
//         //     left: popupXY.x + size * 0.05,
//         //     top: popupXY.y - size * 0.025,
//         //     background: "linear-gradient(135deg, #f8fbff 0%, #eaf1fa 100%)",
//         //     borderRadius: "8px",
//         //     border: "1px solid #e3eaf3",
//         //     boxShadow:
//         //       "0 8px 32px rgba(60, 120, 180, 0.18), 0 1.5px 8px rgba(0,0,0,0.10)",
//         //     padding: "18px 20px 14px 18px",
//         //     width: size * 0.525,
//         //     minHeight: size * 0.175,
//         //     fontFamily: "Arial, sans-serif",
//         //     zIndex: 10,
//         //     display: "flex",
//         //     flexDirection: "column",
//         //     justifyContent: "space-between",
//         //     opacity: popupFade ? 0 : 1,
//         //     transition: "opacity 0.8s",
//         //   }}
//         // >
//         <div
//           style={{
//             position: "absolute",
//             left:
//               size <= 767
//                 ? size / 2 - (size * 0.525) / 2
//                 : popupXY.x + size * 0.05, // center on mobile
//             top:
//               size <= 767
//                 ? size / 2 - (size * 0.175) / 2
//                 : popupXY.y - size * 0.025, // center on mobile
//             background: "linear-gradient(135deg, #f8fbff 0%, #eaf1fa 100%)",
//             borderRadius: "8px",
//             border: "1px solid #e3eaf3",
//             boxShadow:
//               "0 8px 32px rgba(60, 120, 180, 0.18), 0 1.5px 8px rgba(0,0,0,0.10)",
//             padding: "18px 20px 14px 18px",
//             width: size * 0.525,
//             minHeight: size * 0.175,
//             fontFamily: "Arial, sans-serif",
//             zIndex: 10,
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "space-between",
//             opacity: popupFade ? 0 : 1,
//             transition: "opacity 0.8s",
//           }}
//         >
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               marginBottom: "10px",
//               gap: "14px",
//             }}
//           >
//             <img
//               src="https://img.icons8.com/fluency/96/box.png"
//               alt="Box"
//               style={{
//                 width: "36px",
//                 height: "36px",
//                 borderRadius: "6px",
//                 boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
//               }}
//             />
//             <div
//               style={{
//                 flex: 1,
//                 display: "flex",
//                 justifyContent: "space-between",
//                 textAlign: "center",
//                 gap: "10px",
//               }}
//             >
//               <div>
//                 <p
//                   style={{
//                     margin: "2px 0",
//                     fontSize: "12px",
//                     color: "#5a6a7a",
//                     fontWeight: 500,
//                   }}
//                 >
//                   Weight
//                 </p>
//                 <h4
//                   style={{
//                     margin: 0,
//                     fontSize: "14px",
//                     fontWeight: 600,
//                     color: "#2a3a4a",
//                   }}
//                 >
//                   15kg
//                 </h4>
//               </div>
//               <div>
//                 <p
//                   style={{
//                     margin: "2px 0",
//                     fontSize: "12px",
//                     color: "#5a6a7a",
//                     fontWeight: 500,
//                   }}
//                 >
//                   Distance
//                 </p>
//                 <h4
//                   style={{
//                     margin: 0,
//                     fontSize: "14px",
//                     fontWeight: 600,
//                     color: "#2a3a4a",
//                   }}
//                 >
//                   {popup.r === 60 ? "5km" : "10km"}
//                 </h4>
//               </div>
//             </div>
//           </div>
//           <div
//             style={{
//               borderTop: "1px solid #e3eaf3",
//               paddingTop: "7px",
//               display: "flex",
//               justifyContent: "space-between",
//               fontSize: "12px",
//               color: "#4a5a6a",
//             }}
//           >
//             <span style={{ color: "#7a8a9a", fontWeight: 500 }}>
//               Delivery Charge
//             </span>
//             <span
//               style={{ fontWeight: 700, fontSize: "15px", color: "#1a2a3a" }}
//             >
//               {popup.r === 60 ? "₹ 75.00" : "₹ 100.00"}
//             </span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


import React, { useState, useEffect, useRef } from "react";

const DOTS = [
  { id: 1, r: 60, angle: 45, label: "Inner Dot 1" },
  { id: 2, r: 120, angle: 240, label: "Inner Dot 2" }
];

export default function RadarGradient({ style = {}, className = "" }) {
  const containerRef = useRef(null);
  const [size, setSize] = useState(400); // dynamic size
  const [CENTER, setCENTER] = useState(200);
  const [OUTER_R, setOUTER_R] = useState(150);
  const [INNER_R, setINNER_R] = useState(80);

  const [angle, setAngle] = useState(0);
  const [popup, setPopup] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupFade, setPopupFade] = useState(false);
  const [popupXY, setPopupXY] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth;
        setSize(w);
        setCENTER(w / 2);
        setOUTER_R(w * 0.375); // 150/400 ratio
        setINNER_R(w * 0.2);   // 80/400 ratio
        setIsMobile(w <= 767);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle(prev => (prev + 1) % 360);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  function getDotXY(r, angleDeg) {
    const rad = (angleDeg - 90) * (Math.PI / 180);
    return {
      x: CENTER + r * Math.cos(rad),
      y: CENTER + r * Math.sin(rad)
    };
  }

  useEffect(() => {
    const found = DOTS.find(dot => {
      let diff = Math.abs((angle - dot.angle + 360) % 360);
      if (diff > 180) diff = 360 - diff;
      return diff < 12;
    });
    if (found) {
      setPopup(found);
      setPopupVisible(true);
      setPopupFade(false);

      // adjust radius for mobile so dots are slightly inward
      const rAdjusted = isMobile ? found.r * 0.85 : found.r;
      const { x, y } = getDotXY(rAdjusted, found.angle);
      setPopupXY({ x, y });

      setTimeout(() => setPopupFade(true), 2000);
      setTimeout(() => setPopupVisible(false), 2800);
    }
  }, [angle, CENTER, OUTER_R, INNER_R, isMobile]);

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        maxWidth: 400,
        aspectRatio: "1/1",
        margin: "0 auto",
        position: "relative",
        ...style
      }}
      className={className}
    >
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${size} ${size}`}
        preserveAspectRatio="xMidYMid meet"
        style={{ display: "block" }}
      >
        {/* Radar sweep */}
        <foreignObject
          x={CENTER - OUTER_R}
          y={CENTER - OUTER_R}
          width={OUTER_R * 2}
          height={OUTER_R * 2}
          style={{ pointerEvents: "none" }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
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
              opacity: 0.15,
              mixBlendMode: "lighten"
            }}
          />
        </foreignObject>

        {/* Circles */}
        <circle cx={CENTER} cy={CENTER} r={OUTER_R} fill="none" stroke="#9dc3f8" strokeWidth={2} />
        <circle cx={CENTER} cy={CENTER} r={INNER_R} fill="none" stroke="#9dc3f8" strokeWidth={2} />

        {/* Dots */}
        {DOTS.map(dot => {
          const rAdjusted = isMobile ? dot.r * 0.85 : dot.r;
          const { x, y } = getDotXY(rAdjusted, dot.angle);
          return <circle key={dot.id} cx={x} cy={y} r={size * 0.0125} fill="blue" />;
        })}

        {/* Labels */}
        <text x={CENTER} y={CENTER - INNER_R + size * 0.35} textAnchor="middle" fontSize={size * 0.04} fill="#070707ff" fontFamily="Arial, sans-serif">
          5km
        </text>
        <text x={CENTER} y={CENTER - OUTER_R + size * 0.675} textAnchor="middle" fontSize={size * 0.04} fill="#0a0a0aff" fontFamily="Arial, sans-serif">
          10km
        </text>

        {/* Center dot */}
        <circle cx={CENTER} cy={CENTER} r={size * 0.02} fill="#c2c2beff" stroke="#fff" strokeWidth={2} />
      </svg>

      {/* Popup */}
      {popup && popupVisible && (
        <div
          style={{
            position: "absolute",
            left: isMobile ? (size / 2 - (size * 0.525) / 2 ) +100 : (popupXY.x + size * 0.05) +200,
            top: isMobile ? (size / 2 - (size * 0.175) / 2 )+50: (popupXY.y - size * 0.025) + 100,
            background: "linear-gradient(135deg, #f8fbff 0%, #eaf1fa 100%)",
            borderRadius: "8px",
            border: "1px solid #e3eaf3",
            boxShadow: "0 8px 32px rgba(60, 120, 180, 0.18), 0 1.5px 8px rgba(0,0,0,0.10)",
            padding: "18px 20px 14px 18px",
            width: size * 0.525,
            minHeight: size * 0.175,
            fontFamily: "Arial, sans-serif",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            opacity: popupFade ? 0 : 1,
            transition: "opacity 0.8s"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", marginBottom: "10px", gap: "14px" }}>
            <img
              src="https://img.icons8.com/fluency/96/box.png"
              alt="Box"
              style={{ width: "36px", height: "36px", borderRadius: "6px", boxShadow: "0 2px 8px rgba(0,0,0,0.07)" }}
            />
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
          <div style={{ borderTop: "1px solid #e3eaf3", paddingTop: "7px", display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#4a5a6a" }}>
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

