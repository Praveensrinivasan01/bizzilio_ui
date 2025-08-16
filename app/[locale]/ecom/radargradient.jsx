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
    angle: 300,
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
 
  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => (prev + 1) % 360);
    }, 20);
    return () => clearInterval(interval);
  }, []);
 
  // Check if sweep is over a dot (±12deg window)
  useEffect(() => {
    const found = DOTS.find(dot => {
      let diff = Math.abs(((angle - dot.angle + 360) % 360));
      if (diff > 180) diff = 360 - diff;
      return diff < 12;
    });
    setPopup(found || null);
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
        {/* Popup */}
        {popup && (() => {
          const { x, y } = getDotXY(popup.r, popup.angle);
          return (
            <foreignObject x={x + 10} y={y - 10} width="170" height="70">
              <div style={{
                background: "#fff",
                borderRadius: "18px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                padding: "10px",
                width: "150px",
                fontFamily: "Arial, sans-serif"
              }}>
                {/* Top section */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  {/* Box Image */}
                  <img src="https://img.icons8.com/fluency/96/box.png" alt="Box" style={{ width: "32px", height: "32px" }} />
                  {/* Details */}
                  <div style={{ flex: 1, display: "flex", justifyContent: "space-around", textAlign: "center" }}>
                    <div>
                      <p style={{ margin: "2px 0", fontSize: "11px", color: "#666" }}>Weight</p>
                      <h4 style={{ margin: 0, fontSize: "12px", fontWeight: 600, color: "#333" }}>15kg</h4>
                    </div>
                    <div>
                      <p style={{ margin: "2px 0", fontSize: "11px", color: "#666" }}>Distance</p>
                      <h4 style={{ margin: 0, fontSize: "12px", fontWeight: 600, color: "#333" }}>10km</h4>
                    </div>
                  </div>
                </div>
                {/* Footer */}
                <div style={{ borderTop: "1px solid #eee", paddingTop: "5px", display: "flex", justifyContent: "space-between", fontSize: "11px" }}>
                  <span style={{ color: "#888" }}>Delivery Charge</span>
                  <span style={{ fontWeight: "bold", fontSize: "13px", color: "#000" }}>₹ 75.00</span>
                </div>
              </div>
            </foreignObject>
          );
        })()}
      </svg>
    </div>
  );
}
 
 