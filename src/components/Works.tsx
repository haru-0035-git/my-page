// src/components/Works.tsx
import React from "react";
import "../styles/Works.css";

const worksData = [
  {
    title: "Word Trainer",
    githubUrl: "https://word-trainer-seven.vercel.app/",
    explanation:
      "英単語やIPAの単語を覚えるためのアプリです。Reactを使用しています。",
    progress: "進捗率: 60%",
  },
  {
    title: "ポートフォリオ",
    githubUrl: " https://github.com/haru-0035-git/my-page",
    explanation: "自分のポートフォリオサイトです。Reactを使用しています。",
    progress: "進捗率: 80%",
  },
  {
    title: "家計簿アプリ",
    githubUrl: "https://github.com/haru-0035-git/flask-app",
    explanation: "Flaskを使用した家計簿アプリです。学校の授業で作成しました。",
    progress: "進捗率: 70%",
  },
  {
    title: "メモアプリ",
    githubUrl: "https://github.com/haru-0035-git/MyApp",
    explanation:
      "マークダウンエディタです。Reactを使用しています。Reactの勉強のために作成しました。",
    progress: "進捗率: 70%",
  },
  {
    title: "ToDoアプリ",
    githubUrl: "https://mytodo-beryl.vercel.app/",
    explanation:
      "あるあるのToDoアプリです。Nextjsの勉強のために作成中です。修正したい場所があったので修正中",
    progress: "進捗率: 100%",
  },
];

const Works: React.FC = () => {
  return (
    <section className="works-section">
      <h2 className="works-title">作った作品一覧</h2>
      <div className="works-container">
        {worksData.map((work, index) => (
          <div key={index} className="work-card">
            <h2 className="work-card-title">{work.title}</h2>
            <p>{work.explanation}</p>
            <p>{work.progress}</p>
            <a
              href={work.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="work-card-link"
            >
              GitHubまたはサイトへ
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
