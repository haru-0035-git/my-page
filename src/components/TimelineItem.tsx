// src/components/TimelineItem.tsx
import React from "react";
import { useInView } from "react-intersection-observer";

interface TimelineItemProps {
  year: string;
  text: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, text }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`fade-in-section ${inView ? "is-visible" : ""}`}
      style={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        marginBottom: "60px",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}
    >
      <div
        style={{
          width: "120px",
          textAlign: "right",
          paddingRight: "30px",
          fontStyle: "italic",
          fontSize: "20px",
        }}
      >
        {year}
      </div>
      <div
        style={{
          width: "30px",
          height: "30px",
          backgroundColor: "white",
          borderRadius: "50%",
          border: "4px solid #ffffff",
          zIndex: 2,
        }}
      />
      <div
        style={{
          marginLeft: "40px",
          fontSize: "22px",
          lineHeight: "1.5",
          fontWeight: "bold",
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default TimelineItem;
