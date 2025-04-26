import React from "react";
import logo from "../logo/icon-1.png"; // 画像のパスを指定
import ReactMarkDown from "react-markdown"; // React Markdownをインポート

const About: React.FC = () => {
  return (
    <section
      style={{
        padding: "40px 20px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column", // まず縦並びにする！
        alignItems: "center",
      }}
    >
      {/* h1だけ上に置く */}
      <h1
        style={{
          marginBottom: "30px",
          fontSize: "65px",
          fontWeight: "bold",
          color: "#333",
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
          flexDirection: "row", // ここだけ横並び
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={logo}
          alt="ロゴ"
          style={{ width: "200px", marginRight: "20px" }}
        />
        <p style={{ maxWidth: "600px", textAlign: "left", fontSize: "18px" }}>
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
