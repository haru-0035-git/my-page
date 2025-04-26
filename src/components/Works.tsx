// src/components/Works.tsx
import React from "react";

const worksData = [
  { title: "作品タイトル1", githubUrl: "https://github.com/yourname/project1" },
  { title: "作品タイトル2", githubUrl: "https://github.com/yourname/project2" },
  { title: "作品タイトル3", githubUrl: "https://github.com/yourname/project3" },
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
            <h3>{work.title}</h3>
            <a href={work.githubUrl} target="_blank" rel="noopener noreferrer">
              GitHubを見る
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
