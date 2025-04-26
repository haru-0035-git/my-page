// src/components/Timeline.tsx
import React from "react";

const timelineData = [
  { year: "0000年00月", text: "d f w ふぁが" },
  { year: "0000年00月", text: "d f w ふぁが" },
  { year: "0000年00月", text: "d f w ふぁが" },
  { year: "0000年00月", text: "d f w ふぁが" },
  { year: "0000年00月", text: "d f w ふぁが" },
  { year: "0000年00月", text: "d f w ふぁが" },
];

const Timeline: React.FC = () => {
  return (
    <section style={{ backgroundColor: "#b3e5fc", padding: "40px 20px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {timelineData.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                width: "120px",
                textAlign: "right",
                paddingRight: "20px",
              }}
            >
              {item.year}
            </div>
            <div
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: "white",
                borderRadius: "50%",
              }}
            />
            <div style={{ marginLeft: "20px" }}>{item.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
