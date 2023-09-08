import React, { useState, useEffect } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import "./DarkModeToggle.css";

export const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(true);
  const [isMoonVisible, setIsMoonVisible] = useState(false);
  const [isSunVisible, setIsSunVisible] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDark]);

  const handleToggleClick = () => {
    setIsDark(prevIsDark => !prevIsDark);
    setIsMoonVisible(prevIsMoonVisible => !prevIsMoonVisible);
    setIsSunVisible(prevIsSunVisible => !prevIsSunVisible);
  };

  return (
    <button
      className="container"
      aria-label="Toggle color mode"
      title="Toggle color mode"
      onClick={handleToggleClick}
    >
      <div className={`sun ${isSunVisible ? "visible" : "not-visible"}`}></div>
      <div className={`moon ${isMoonVisible ? "visible" : "not-visible"}`}>
        <div className="star"></div>
        <div className="star small"></div>
      </div>
    </button>
  );
};