// src/components/Timeline.tsx
import React from "react";
import TimelineItem from "./TimelineItem";
import "../styles/Timeline.css";

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
  { year: "2025年05月", text: "paizaBランク獲得" },
  { year: "2025年06月", text: "Nextjsの勉強を始める" },
];

const Timeline: React.FC = () => {
  return (
    <section className="timeline-section">
      <div className="timeline-container">
        {timelineData.map((item, index) => (
          <TimelineItem key={index} year={item.year} text={item.text} />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
