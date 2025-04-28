import React, { useState, useEffect, useRef } from "react";
import img1 from "../image/365.png"; // 画像のパスを指定
import img2 from "../image/css.png"; // 画像のパスを指定
import img3 from "../image/fastapi.png"; // 画像のパスを指定
import img4 from "../image/flask.png"; // 画像のパスを指定
import img5 from "../image/github.png"; // 画像のパスを指定
import img6 from "../image/gitlab.png"; // 画像のパスを指定
import img7 from "../image/html.webp"; // 画像のパスを指定
import img8 from "../image/JS.png"; // 画像のパスを指定
import img9 from "../image/MySQL.png"; // 画像のパスを指定
import img10 from "../image/php.png"; // 画像のパスを指定
import img11 from "../image/python.png"; // 画像のパスを指定
import img12 from "../image/react.jpg"; // 画像のパスを指定
import img13 from "../image/swift.jpg"; // 画像のパスを指定
import img14 from "../image/tailwind.png"; // 画像のパスを指定
import img15 from "../image/TS.png"; // 画像のパスを指定
import img16 from "../image/ubuntu.png"; // 画像のパスを指定
import img17 from "../image/Vitepng.png"; // 画像のパスを指定

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
]; // 画像のパスを指定

const Portfolio = "My Portfolio"; // スライドに表示するテキスト

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3000);

    return () => resetTimeout();
  }, [currentIndex]);

  const handleTransitionEnd = () => {
    if (currentIndex === images.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
    }
  }, [isTransitioning]);

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100vw",
        height: "100vh", // スライダーの高さ
        position: "relative",
      }}
    >
      {/* 青色の透過オーバーレイ */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh", // 高さを100vhに変更
          backgroundColor: "rgba(138, 183, 210, 0.3)", // 50%透過の青色
          zIndex: 3, // スライドの上にかぶせる
        }}
      />
      <div>
        <h1
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#000", // テキストの色
            fontSize: "6rem", // フォントサイズ
            zIndex: 4, // スライドの上にかぶせる
          }}
        >
          {Portfolio}
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          width: `${images.length * 100}vw`, // 1画像分を100vwの幅で設定
          transform: `translateX(-${currentIndex * 100}vw)`,
          transition: isTransitioning
            ? "transform 1.5s cubic-bezier(0.25, 1, 0.5, 1)"
            : "none",
          zIndex: 1,
          position: "absolute",
          justifyContent: "center", // 水平方向に中央に配置
          alignItems: "center", // 垂直方向に中央に配置
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {images.map((src, index) => (
          <div
            key={index}
            style={{
              width: "100vw", // 1枚1枚が画面いっぱい
              height: "100vh", // 画像も画面いっぱいに表示
              display: "flex", // 中央配置のため
              justifyContent: "center", // 水平方向の中央
              alignItems: "center", // 垂直方向の中央
              opacity: "0.8", // 画像の透明度
            }}
          >
            <img
              src={src}
              alt={`Slide ${index}`}
              style={{
                width: "500px", // 画像の大きさ
                height: "500px", // 画像の大きさ
                objectFit: "contain", // 縦横比を保ちながら表示
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
