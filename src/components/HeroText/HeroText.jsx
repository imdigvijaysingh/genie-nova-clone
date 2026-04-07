import React from "react";
import "./HeroText.css";

const HeroText = ({ parallaxStyle, scrollProgress, isInteractive }) => {
  // This style activates only after the entrance animations finish.
  // It uses the exact same 1200px velocity and 2.5x fade speed as the phone mockup.
  const blurOverlayStyle = isInteractive
    ? {
        // We use calc() to keep the original -50% centering while adding the upward scroll movement
        transform: `translate(-50%, calc(-50% - ${scrollProgress * 1200}px))`,
        opacity: Math.max(0, 1 - scrollProgress * 2.5),
        transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
      }
    : {};

  return (
    <div className="text-container" style={parallaxStyle}>
      <h1 className="hero-text">
        <span className="line">Talk Smarter</span>
        <span className="line">Not Harder</span>
      </h1>

      {/* Apply the dynamic scroll style directly to the overlay */}
      <div className="center-blur-overlay" style={blurOverlayStyle}></div>
    </div>
  );
};

export default HeroText;
