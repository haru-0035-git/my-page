// src/components/Timeline.tsx
import React from "react";
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
  return (
    <section
      style={{
        backgroundColor: "#b3e5fc",
        padding: window.innerWidth <= 768 ? "40px 10px" : "60px 20px",
      }}
    >
      <div
        style={{
          maxWidth: window.innerWidth <= 768 ? "100%" : "800px",
          margin: "0 auto",
          position: "relative",
          padding: window.innerWidth <= 768 ? "0 10px" : "0",
        }}
      >
        {/* 縦線 */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: window.innerWidth <= 768 ? "70px" : "110px",
            width: "4px",
            height: "100%",
            backgroundColor: "#000",
            zIndex: 0,
          }}
        />
        {timelineData.map((item, index) => (
          <TimelineItem key={index} year={item.year} text={item.text} />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
