import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: "rgba(13, 2, 33, 0.8)",
        backdropFilter: "blur(5px)",
        boxShadow: "0 0 10px #00ffff",
        padding: "20px",
        textAlign: "center",
        color: "#00ffff",
      }}
    >
      <p>© 2023 haru-0035-git</p>
      <a target="_blank" href="https://icons8.com/icon/naDnVpQ3BNkR/portfolio">
        ポートフォリオ
      </a>
      アイコン by{" "}
      <a target="_blank" href="https://icons8.com">
        Icons8
      </a>
    </footer>
  );
};

export default Footer;
