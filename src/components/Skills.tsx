// src/components/Skills.tsx
import React, { useState, useEffect, useRef } from "react";
import img1 from "../img/365.png"; // 画像のパスを指定
import img2 from "../img/css.png"; // 画像のパスを指定
import img3 from "../img/fastapi.png"; // 画像のパスを指定
import img4 from "../img/flask.png"; // 画像のパスを指定
import img5 from "../img/github.png"; // 画像のパスを指定
import img6 from "../img/gitlab.png"; // 画像のパスを指定
import img7 from "../img/html.webp"; // 画像のパスを指定
import img8 from "../img/JS.png"; // 画像のパスを指定
import img9 from "../img/MySQL.png"; // 画像のパスを指定
import img10 from "../img/php.png"; // 画像のパスを指定
import img11 from "../img/python.png"; // 画像のパスを指定
import img12 from "../img/react.jpg"; // 画像のパスを指定
import img13 from "../img/swift.jpg"; // 画像のパスを指定
import img14 from "../img/tailwind.png"; // 画像のパスを指定
import img15 from "../img/TS.png"; // 画像のパスを指定
import img16 from "../img/ubuntu.png"; // 画像のパスを指定
import img17 from "../img/Vitepng.png"; // 画像のパスを指定
import exp from "constants";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
]; // 画像のパスを指定
const skillsData = [
  {
    name: "365",
    level: "修練度 中",
    img: "img1",
    explanation: "学校で使用しているコミュニケーションツール。",
  },
  {
    name: "CSS",
    level: "修練度 低",
    img: "img2",
    explanation: "授業で習った程度の知識。",
  },
  {
    name: "fastAPI",
    level: "修練度 低",
    img: "img3",
    explanation: "授業で習った程度の知識。",
  },
  {
    name: "Flask",
    level: "修練度 中",
    img: "img4",
    explanation: "授業で習った後オリジナルのアプリを作った。",
  },
  {
    name: "GitHub",
    level: "修練度 中",
    img: "img5",
    explanation: "基本的な操作でき、グループでの作業も経験した。",
  },
  {
    name: "GitLab",
    level: "修練度 中",
    img: "img6",
    explanation: "基本的な操作でき、グループでの作業も経験した。",
  },
  {
    name: "HTML",
    level: "修練度 中",
    img: "img7",
    explanation: "基本的なコードはかけるが、あまり経験はない。",
  },
  {
    name: "JavaScript",
    level: "修練度 低",
    img: "img8",
    explanation: "授業で習ったが、もう一度勉強し直す必要がある。",
  },
  {
    name: "MySQL",
    level: "修練度 中",
    img: "img9",
    explanation:
      "授業で習い基本的なSQLがかけ自作のアプリにも使用した。設計は微妙。",
  },
  {
    name: "PHP",
    level: "修練度 低",
    img: "img10",
    explanation: "授業で習った程度の知識",
  },
  {
    name: "Python",
    level: "修練度 中",
    img: "img11",
    explanation: "授業で主に使っている言語。paizaでCランクを獲得した。",
  },
  {
    name: "React",
    level: "修練度 低～中",
    img: "img12",
    explanation:
      "独学で学んでいるが、まだまだ経験不足。このサイトもReactで作成。",
  },
  {
    name: "Swift",
    level: "修練度 低",
    img: "img13",
    explanation: "授業で習ったが、IOSがないため学習ができない。",
  },
  {
    name: "tailwind",
    level: "修練度 低",
    img: "img14",
    explanation: "reactと並行して使用しているがあまり知識は持っていない。",
  },
  {
    name: "TypeScript",
    level: "修練度 低",
    img: "img15",
    explanation: "参加したプロジェクトで使用した。型定義が難しい。",
  },
  {
    name: "Ubuntu",
    level: "修練度 中",
    img: "img16",
    explanation:
      "自宅で使わないパソコンのOSをUbuntuに変更しサーバーとして使っている。",
  },
  {
    name: "Vite",
    level: "修練度 高",
    img: "img17",
    explanation:
      "自作のアプリをreactで作る時に使った。構築とビルドができる程度。",
  },
];

const Skills: React.FC = () => {
  return (
    <section
      style={{
        backgroundColor: "#b3e5fc",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginBottom: "30px", fontSize: "65px", fontStyle: "Bold" }}>
        技術修練度
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {skillsData.map((skill, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              width: "150px",
              padding: "20px",
              backgroundColor: "white",
            }}
          >
            <h3>{skill.name}</h3>
            <img
              src={images[index]}
              alt={skill.name}
              style={{ width: "50px", height: "auto" }}
            />
            <p>{skill.explanation}</p>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
