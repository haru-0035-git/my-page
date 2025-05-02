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
import img18 from "../img/raspberry-pi.png"; // 画像のパスを指定
import img19 from "../img/discord.png"; // 画像のパスを指定
import img20 from "../img/docker.png"; // 画像のパスを指定
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
  img18,
  img19,
  img20,
]; // 画像のパスを指定
const skillsData = [
  {
    name: "365",
    level: "修練度 中",
    img: "img1",
    explanation: "学校で使用しているコミュニケーションツール。",
    levelValue: 2,
    category: "SNS",
  },
  {
    name: "CSS",
    level: "修練度 低",
    img: "img2",
    explanation: "授業で習った程度の知識。",
    levelValue: 1,
    category: "言語",
  },
  {
    name: "fastAPI",
    level: "修練度 低",
    img: "img3",
    explanation: "授業で習った程度の知識。",
    levelValue: 1,
    category: "フレームワーク",
  },
  {
    name: "Flask",
    level: "修練度 中",
    img: "img4",
    explanation: "授業で習った後オリジナルのアプリを作った。",
    levelValue: 2,
    category: "フレームワーク",
  },
  {
    name: "GitHub",
    level: "修練度 中",
    img: "img5",
    explanation: "基本的な操作でき、グループでの作業も経験した。",
    levelValue: 2,
    category: "ツール",
  },
  {
    name: "GitLab",
    level: "修練度 中",
    img: "img6",
    explanation: "基本的な操作でき、グループでの作業も経験した。",
    levelValue: 2,
    category: "ツール",
  },
  {
    name: "HTML",
    level: "修練度 中",
    img: "img7",
    explanation: "基本的なコードはかけるが、あまり経験はない。",
    levelValue: 2,
    category: "言語",
  },
  {
    name: "JavaScript",
    level: "修練度 低",
    img: "img8",
    explanation: "授業で習ったが、もう一度勉強し直す必要がある。",
    levelValue: 1,
    category: "言語",
  },
  {
    name: "MySQL",
    level: "修練度 中",
    img: "img9",
    explanation:
      "授業で習い基本的なSQLがかけ自作のアプリにも使用した。設計は微妙。",
    levelValue: 2,
    category: "データベース",
  },
  {
    name: "PHP",
    level: "修練度 低",
    img: "img10",
    explanation: "授業で習った程度の知識",
    levelValue: 1,
    category: "言語",
  },
  {
    name: "Python",
    level: "修練度 中",
    img: "img11",
    explanation: "授業で主に使っている言語。paizaでCランクを獲得した。",
    levelValue: 2,
    category: "言語",
  },
  {
    name: "React",
    level: "修練度 低～中",
    img: "img12",
    explanation:
      "独学で学んでいるが、まだまだ経験不足。このサイトもReactで作成。",
    levelValue: 1.5,
    category: "フレームワーク",
  },
  {
    name: "Swift",
    level: "修練度 低",
    img: "img13",
    explanation: "授業で習ったが、IOSがないため学習ができない。",
    levelValue: 1,
    category: "言語",
  },
  {
    name: "tailwind",
    level: "修練度 低",
    img: "img14",
    explanation: "reactと並行して使用しているがあまり知識は持っていない。",
    levelValue: 1,
    category: "CSSフレームワーク",
  },
  {
    name: "TypeScript",
    level: "修練度 低",
    img: "img15",
    explanation: "参加したプロジェクトで使用した。型定義が難しい。",
    levelValue: 1,
    category: "言語",
  },
  {
    name: "Ubuntu",
    level: "修練度 中",
    img: "img16",
    explanation:
      "自宅で使わないパソコンのOSをUbuntuに変更しサーバーとして使っている。",
    levelValue: 2,
    category: "OS",
  },
  {
    name: "Vite",
    level: "修練度 高",
    img: "img17",
    explanation:
      "自作のアプリをreactで作る時に使った。構築とビルドができる程度。",
    levelValue: 3,
    category: "ビルドツール",
  },
  {
    name: "Raspberry Pi",
    level: "修練度 低",
    img: "img18",
    explanation: "授業で習った程度の知識。いつか自前のものを買いたい。",
    levelValue: 1,
    category: "ハードウェア",
  },
  {
    name: "Discord",
    level: "修練度 中",
    img: "img19",
    explanation: "授業やプロジェクトで使ったコミュニケーションツール。",
    levelValue: 2,
    category: "SNS",
  },
  {
    name: "Docker",
    level: "修練度 低",
    img: "img20",
    explanation: "プロジェクトで使ったがほとんど理解していない。",
    levelValue: 1,
    category: "ツール",
  },
];

type Skill = {
  name: string;
  level: string;
  levelValue: number;
  img: string;
  explanation: string;
  category: string;
};

type SkillWithImage = Skill & { imgPath: string };
const categorizedSkills: { [key: string]: SkillWithImage[] } = {}; // 🔧 修正済み！

skillsData.forEach((skill, index) => {
  const cat = skill.category;
  if (!categorizedSkills[cat]) categorizedSkills[cat] = [];
  categorizedSkills[cat].push({ ...skill, imgPath: images[index] });
});

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
        {Object.entries(categorizedSkills).map(([category, skills]) => (
          <div key={category} style={{ marginBottom: "40px" }}>
            <h3 style={{ fontSize: "40px", marginBottom: "20px" }}>
              {category}
            </h3>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              {skills.map((skill, index) => (
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
                  <h4>{skill.name}</h4>
                  <img
                    src={skill.imgPath}
                    alt={skill.name}
                    style={{ width: "50px", height: "auto" }}
                  />
                  <p>{skill.explanation}</p>
                  <p>{skill.level}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
