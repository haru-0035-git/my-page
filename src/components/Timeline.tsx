// src/components/Timeline.tsx
import React, { useState, useEffect } from "react";
import TimelineItem from "./TimelineItem";

const timelineData = [
  { year: "2023年04月", text: "専門学校入学 Python,MySQLに初めて触る" },
  { year: "2023年08月", text: "ITパスポート合格" },
  { year: "2024年03月", text: "基本情報技術者試験合格" },
  { year: "2024年04月", text: "javascript,PHPに初めて触る" },
  { year: "2024年06月", text: "paiza Cランク獲得" },
  {
    year: "2024年09月",
    text: "flaskを初めて触る。フレームワークに初めて触る。",
  },
  { year: "2024年11月", text: "reactに初めて触る。" },
  { year: "2025年01月~2025年04月", text: "入学式プレゼンテーションに参加" },
];

const Timeline: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      style={{
        backgroundColor: "#b3e5fc",
        padding: isMobile ? "40px 10px" : "60px 20px",
      }}
    >
      <div
        style={{
          maxWidth: isMobile ? "100%" : "800px",
          margin: "0 auto",
          position: "relative",
          padding: isMobile ? "0 10px" : "0",
        }}
      >
        {/* 縦線 */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: isMobile ? "90px" : "130px",
            width: "4px",
            height: "100%",
            backgroundColor: "#000",
            zIndex: 1,
          }}
        />
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            year={item.year}
            text={item.text}
            isMobile={isMobile}
          />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
