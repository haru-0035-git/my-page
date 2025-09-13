// src/App.tsx
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Works from "./components/Works";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (isAnimating) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isAnimating]);

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  return (
    <div>
      <Header />
      <div id="body">
        <Body onAnimationEnd={handleAnimationEnd} />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="timeline">
        <Timeline />
      </div>
      <div id="works">
        <Works />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <Footer />
    </div>
  );
};

export default App;
