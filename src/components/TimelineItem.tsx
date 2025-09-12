// src/components/TimelineItem.tsx
import React, { useState, useEffect, useRef } from "react";

interface TimelineItemProps {
  year: string;
  text: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, text }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 要素が画面内に入ったらisVisibleをtrueに、出たらfalseに設定
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // 要素が10%見えたらトリガー
      }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div ref={elementRef} className={`timeline-item ${isVisible ? 'is-visible' : ''}`}>
      <div className="timeline-item-dot" />
      <div className="timeline-item-content">
        <div className="timeline-item-text">
          <div className="timeline-item-year">{year}</div>
          <div className="timeline-item-explanation">{text}</div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
