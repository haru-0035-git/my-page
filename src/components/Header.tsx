// src/components/Header.tsx
import React from "react";
import logo from "../logo/icon-1.png";

const Header: React.FC = () => {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "auto",
        minHeight: window.innerWidth <= 768 ? "50px" : "60px",
        backgroundColor: "#424b57",
        display: "flex",
        flexDirection: window.innerWidth <= 768 ? "column" : "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: window.innerWidth <= 768 ? "5px" : "0 60px",
        boxSizing: "border-box",
        zIndex: 1000,
      }}
    >
      {/* ロゴ部分 */}
      <img
        src={logo}
        alt="ロゴ"
        style={{
          width: window.innerWidth <= 768 ? "40px" : "100px",
          height: "auto",
          borderRadius: "50%",
          marginBottom: window.innerWidth <= 768 ? "5px" : "0",
        }}
      />

      {/* ナビゲーション */}
      <nav
        style={{
          display: "flex",
          gap: window.innerWidth <= 768 ? "10px" : "30px",
          flexDirection: window.innerWidth <= 768 ? "row" : "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <a
          href="#body"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: window.innerWidth <= 768 ? "14px" : "20px",
            fontWeight: "bold",
          }}
        >
          Top
        </a>
        <a
          href="#about"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: window.innerWidth <= 768 ? "14px" : "20px",
            fontWeight: "bold",
          }}
        >
          Profile
        </a>
        <a
          href="#timeline"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: window.innerWidth <= 768 ? "14px" : "20px",
            fontWeight: "bold",
          }}
        >
          Timeline
        </a>
        <a
          href="#works"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: window.innerWidth <= 768 ? "14px" : "20px",
            fontWeight: "bold",
          }}
        >
          Works
        </a>
        <a
          href="#skills"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: window.innerWidth <= 768 ? "14px" : "20px",
            fontWeight: "bold",
          }}
        >
          Skills
        </a>
      </nav>
    </header>
  );
};

export default Header;
