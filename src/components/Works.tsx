// src/components/Works.tsx
import exp from "constants";
import React from "react";

const worksData = [
  {
    title: "Word Trainer",
    githubUrl: "",
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
    <section style={{ padding: "40px 20px", textAlign: "center" }}>
      <h2 style={{ marginBottom: "30px" }}>作った作品一覧</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {worksData.map((work, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              width: "200px",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <h2>{work.title}</h2>
            <p>{work.explanation}</p>
            <p>{work.progress}</p>
            <a href={work.githubUrl} target="_blank" rel="noopener noreferrer">
              githubを見る
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
