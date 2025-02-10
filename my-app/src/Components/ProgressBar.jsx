import React from "react";
import "../Css/Home.css";
import "../../src/style.css";

export const ProgressBar = ({ currentIndex, totalSlides }) => {
  const progressWidth = ((currentIndex + 1) / totalSlides) * 100;

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${progressWidth}%` }}></div>
    </div>
  );
};


