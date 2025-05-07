import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: "#b3e5fc",
        padding: "20px",
        textAlign: "center",
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
