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
      <Body />
      <About />
      <Timeline />
      <Works />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
