// src/components/Skills.tsx
import React from "react";

const skillsData = [
  { name: "React", level: "修練度 低" },
  { name: "TypeScript", level: "修練度 低" },
  { name: "Next.js", level: "修練度 低" },
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
      <h2 style={{ marginBottom: "30px" }}>技術修練度</h2>
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
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
