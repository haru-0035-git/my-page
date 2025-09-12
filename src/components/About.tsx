import React from "react";
import logo from "../logo/icon-1.png";
import "../styles/About.css";

const About: React.FC = () => {
  return (
    <section className="about-section">
      <h1 className="about-title">About Me</h1>
      <div className="about-content">
        <img src={logo} alt="ロゴ" className="about-logo" />
        <p className="about-text">
          専門学校に在学中のしがない学生で日々勉強に邁進しています。
          セキュリティやインフラなどに興味を持っています。
          reactを使う機会が多くなってきたので、reactを使った開発を行っています。
          学校ではPythonを主に使用しておりFastAPIやFlaskを使ったWebアプリケーションの開発しています。
          AWSなどのクラウドサービスの勉強もしていきたいと思っています。
        </p>
      </div>
    </section>
  );
};

export default About;
