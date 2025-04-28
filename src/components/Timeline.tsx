// src/components/Timeline.tsx
import React from "react";

const timelineData = [
  { year: "2023年04月", text: "専門学校入学　Python,MySQLに初めて触る" },
  { year: "2023年08月", text: "ITパスポート合格" },
  { year: "2024年03月", text: "基本情報技術者試験合格" },
  { year: "2024年06月", text: "paiza Cランク獲得" },
  { year: "2025年01月~2025年04月", text: "入学式プレゼンテーションに参加" },
];

const Timeline: React.FC = () => {
  return (
    <section style={{ backgroundColor: "#b3e5fc", padding: "40px 20px" }}>
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        {timelineData.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                width: "120px",
                textAlign: "right",
                paddingRight: "30px",
                marginTop: "40px",
                fontStyle: "italic",
                fontSize: "20px",
              }}
            >
              {item.year}
            </div>
            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                marginTop: "40px",
                height: "100%",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "black",
                  borderRadius: "50%",
                  zIndex: "111",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  transform: "translateX(-50%)", // 左右のズレを補正
                  width: "4px",
                  height: "200%",
                  backgroundColor: "#fff",
                  zIndex: 11,
                }}
              />
            </div>
            <div
              style={{
                marginLeft: "40px",
                marginTop: "40px",
                fontSize: "22px",
                lineHeight: "1.5",
                fontStyle: "Bold",
              }}
            >
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
