// src/components/Works.tsx
import exp from "constants";
import React from "react";

const worksData = [
  {
    title: "Word Trainer",
    githubUrl: "https://word-trainer-seven.vercel.app/",
    explanation:
      "英単語やIPAの単語を覚えるためのアプリです。Reactを使用しています。",
    progress: "進捗率: 30%",
  },
  {
    title: "ポートフォリオ",
    githubUrl: " https://github.com/moteki-0035-git/my-page",
    explanation: "自分のポートフォリオサイトです。Reactを使用しています。",
    progress: "進捗率: 80%",
  },
  {
    title: "家計簿アプリ",
    githubUrl: "https://github.com/moteki-0035-git/flask-app",
    explanation: "Flaskを使用した家計簿アプリです。",
    progress: "進捗率: 70%",
  },
];

const Works: React.FC = () => {
  return (
    <section
      style={{
        padding: window.innerWidth <= 768 ? "20px 10px" : "40px 20px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          marginBottom: "30px",
          fontSize: window.innerWidth <= 768 ? "24px" : "32px",
        }}
      >
        作った作品一覧
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: window.innerWidth <= 768 ? "10px" : "20px",
        }}
      >
        {worksData.map((work, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              width: window.innerWidth <= 768 ? "calc(100% - 40px)" : "200px",
              padding: window.innerWidth <= 768 ? "15px" : "20px",
              textAlign: "center",
              margin: window.innerWidth <= 768 ? "5px 0" : "0",
            }}
          >
            <h2
              style={{
                fontSize: window.innerWidth <= 768 ? "20px" : "24px",
                marginBottom: "10px",
              }}
            >
              {work.title}
            </h2>
            <p
              style={{
                fontSize: window.innerWidth <= 768 ? "14px" : "16px",
                margin: "10px 0",
              }}
            >
              {work.explanation}
            </p>
            <p
              style={{
                fontSize: window.innerWidth <= 768 ? "14px" : "16px",
                margin: "10px 0",
              }}
            >
              {work.progress}
            </p>
            <a
              href={work.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: window.innerWidth <= 768 ? "14px" : "16px",
                display: "inline-block",
                padding: "5px 10px",
                backgroundColor: "#f0f0f0",
                borderRadius: "4px",
                textDecoration: "none",
                color: "#333",
              }}
            >
              githubを見る
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
