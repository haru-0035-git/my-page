// src/components/Header.tsx
import React from "react";
import logo from "../logo/icon-1.png";
import "../styles/Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      {/* ロゴ部分 */}
      <img src={logo} alt="ロゴ" className="header-logo" />

      {/* ナビゲーション */}
      <nav className="header-nav">
        <a href="#body">Top</a>
        <a href="#about">Profile</a>
        <a href="#timeline">Timeline</a>
        <a href="#works">Works</a>
        <a href="#skills">Skills</a>
      </nav>
    </header>
  );
};

export default Header;
