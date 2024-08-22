import React, { useEffect, useState } from 'react';
import './ProgressBar.css';

const ProgressBar = ({ sections }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize scroll position on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getProgress = () => {
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    return (scrollY / (docHeight - winHeight)) * 100;
  };

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{ width: `${getProgress()}%` }}
      />
    </div>
  );
};

export default ProgressBar;
