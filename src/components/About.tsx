import React from "react";
import logo from "../logo/icon-1.png"; // 画像のパスを指定
import ReactMarkDown from "react-markdown"; // React Markdownをインポート

const About: React.FC = () => {
  return (
    <section
      style={{
        padding: "40px 20px 100px 20px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column", // まず縦並びにする！
        alignItems: "center",
        margin: "40px",
        backgroundColor: "rgba(13, 2, 33, 0.7)",
        boxShadow: "0 0 15px #ff00ff, 0 0 25px #ff00ff", // マゼンタのネオンボーダー
        borderRadius: "10px",
      }}
    >
      {/* h1だけ上に置く */}
      <h1
        style={{
          marginBottom: "30px",
          fontSize: window.innerWidth <= 768 ? "40px" : "65px",
          fontWeight: "bold",
          color: "#00ffff", // ネオンシアン
          textShadow: "0 0 5px #00ffff, 0 0 10px #00ffff",
        }}
      >
        About Me
      </h1>

      {/* 画像とテキストを横並びに */}
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          display: "flex",
          flexDirection: window.innerWidth <= 768 ? "column" : "row",
          justifyContent: "center",
          alignItems: "center",
          padding: window.innerWidth <= 768 ? "0 15px" : "0",
        }}
      >
        <img
          src={logo}
          alt="ロゴ"
          style={{
            width: window.innerWidth <= 768 ? "150px" : "200px",
            marginRight: window.innerWidth <= 768 ? "0" : "20px",
            marginBottom: window.innerWidth <= 768 ? "20px" : "0",
            boxShadow: "0 0 10px #00ffff, 0 0 15px #00ffff",
            borderRadius: "50%",
          }}
        />
        <p
          style={{
            maxWidth: "600px",
            textAlign: "left",
            fontSize: window.innerWidth <= 768 ? "16px" : "18px",
            padding: window.innerWidth <= 768 ? "0 10px" : "0",
            color: "#f0f0f0", // 少し明るい白
            lineHeight: 1.8,
          }}
        >
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
