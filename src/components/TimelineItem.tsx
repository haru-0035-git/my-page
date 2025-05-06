// src/components/TimelineItem.tsx
import React from "react";

interface TimelineItemProps {
  year: string;
  text: string;
  isMobile: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  text,
  isMobile,
}) => {
  return (
    <div
      style={{
        display: "flex",
        marginBottom: "30px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          width: isMobile ? "60px" : "100px",
          flexShrink: 0,
          textAlign: "right",
          paddingRight: "20px",
          fontSize: isMobile ? "14px" : "16px",
          fontWeight: "bold",
        }}
      >
        {year}
      </div>
      <div
        style={{
          width: "20px",
          height: "20px",
          backgroundColor: "#fff",
          border: "4px solid #000",
          borderRadius: "50%",
          marginRight: "20px",
          marginTop: "-2px",
          flexShrink: 0,
          position: "relative",
          zIndex: 2,
          transform: "translateX(-2px)",
        }}
      />
      <div
        style={{
          flex: 1,
          backgroundColor: "#fff",
          padding: "10px 15px",
          borderRadius: "5px",
          fontSize: isMobile ? "14px" : "16px",
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default TimelineItem;
