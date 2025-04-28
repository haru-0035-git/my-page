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
        height: "80px",
        backgroundColor: "#424b57", // ダークグレー
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between", // 左右にロゴとナビを分ける
        padding: "0 60px",
        boxSizing: "border-box",
        zIndex: 1000,
      }}
    >
      {/* ロゴ部分 */}
      <img
        src={logo}
        alt="ロゴ"
        style={{
          width: "100px",
          height: "auto",
          borderRadius: "50%", // 丸く切り抜き
          objectFit: "cover", // 画像を中央にトリミング
        }}
      />

      {/* ナビゲーション */}
      <nav style={{ display: "flex", gap: "30px" }}>
        <a
          href="#body"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "20px",
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
            fontSize: "20px",
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
            fontSize: "20px",
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
            fontSize: "20px",
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
            fontSize: "20px",
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
