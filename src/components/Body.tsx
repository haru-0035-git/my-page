import React, { useState, useEffect, useRef } from "react";
import "../styles/Body.css"; // Import the CSS file
import img1 from "../image/365.png";
import img2 from "../image/css.png";
import img3 from "../image/fastapi.png";
import img4 from "../image/flask.png";
import img5 from "../image/github.png";
import img6 from "../image/gitlab.png";
import img7 from "../image/html.webp";
import img8 from "../image/JS.png";
import img9 from "../image/MySQL.png";
import img10 from "../image/php.png";
import img11 from "../image/python.png";
import img12 from "../image/react.jpg";
import img13 from "../image/swift.jpg";
import img14 from "../image/tailwind.png";
import img15 from "../image/TS.png";
import img16 from "../image/ubuntu.png";
import img17 from "../image/Vitepng.png";

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17,
];

const Portfolio = "My Portfolio";

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
    <div className="slider-container">
      <div className="slider-overlay" />
      <div>
        <h1 className="slider-title">{Portfolio}</h1>
      </div>
      <div
        className="slider-track"
        style={{
          width: `${images.length * 100}vw`,
          transform: `translateX(-${currentIndex * 100}vw)`,
          transition: isTransitioning
            ? "transform 1.5s cubic-bezier(0.25, 1, 0.5, 1)"
            : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {images.map((src, index) => (
          <div key={index} className="slide">
            <img src={src} alt={`Slide ${index}`} className="slide-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
