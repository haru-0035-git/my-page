import React from "react";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>© 2023 haru-0035-git</p>
      <a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icon/naDnVpQ3BNkR/portfolio">
        ポートフォリオ
      </a>
      アイコン by{" "}
      <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">
        Icons8
      </a>
    </footer>
  );
};

export default Footer;
