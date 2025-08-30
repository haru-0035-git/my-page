import React from 'react';

interface ProgressBarProps {
  value: number;
  max: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, max }) => {
  const percentage = (value / max) * 100;

  return (
    <div style={{
      width: '100%',
      backgroundColor: '#1a0a24', // バーの背景色
      borderRadius: '5px',
      border: '1px solid #00ffff',
      overflow: 'hidden',
      margin: '5px 0',
    }}>
      <div style={{
        width: `${percentage}%`,
        height: '10px',
        backgroundColor: '#00ffff', // バーの色
        borderRadius: '5px',
        boxShadow: '0 0 5px #00ffff, 0 0 10px #00ffff',
        transition: 'width 0.5s ease-in-out',
      }} />
    </div>
  );
};

export default ProgressBar;
