import React from "react";
import "./SubHero.css";

const SubHero = ({ scrollProgress }) => {
  const subProgress = Math.max(0, Math.min(1, (scrollProgress - 0.25) * 1.5));

  const subContentStyle = {
    opacity: subProgress,
    transform: `translateY(${(1 - subProgress) * 150}px)`,
    pointerEvents: subProgress > 0.5 ? "auto" : "none",
  };

  return (
    <div className="sub-hero-content" style={subContentStyle}>
      <p className="sub-description">
        Enhance customer engagement and streamline communication with AI-powered
        <br />
        chatbots designed for faster, smarter, and more human-like interactions.
      </p>

      <div className="sub-action-buttons">
        <button className="sub-btn-primary">Get Started for Free</button>
        <button className="sub-btn-secondary">Watch Video</button>
      </div>
    </div>
  );
};

export default SubHero;
