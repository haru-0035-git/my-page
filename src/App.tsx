// src/App.tsx
import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Works from "./components/Works";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <div id="body">
        <Body />
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
