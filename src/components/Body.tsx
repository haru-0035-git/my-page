import React, { useEffect } from "react";
import "../styles/Body.css"; // Import the CSS file

interface BodyProps {
  onAnimationEnd: () => void;
}

const Body: React.FC<BodyProps> = ({ onAnimationEnd }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationEnd();
    }, 4800); // The animation takes 4.6s, so 4.8s should be safe.

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <div className="body-container">
      <div className="welcome-container">
        <h1 className="welcome-text">
          <span>W</span>
          <span>e</span>
          <span>l</span>
          <span>c</span>
          <span>o</span>
          <span>m</span>
          <span>e</span>
          <br />
          <span>t</span>
          <span>o</span>
          <br />
          <span>M</span>
          <span>y</span>
          <br />
          <span>P</span>
          <span>o</span>
          <span>r</span>
          <span>t</span>
          <span>f</span>
          <span>o</span>
          <span>l</span>
          <span>i</span>
          <span>o</span>
        </h1>
      </div>
    </div>
  );
};

export default Body;
