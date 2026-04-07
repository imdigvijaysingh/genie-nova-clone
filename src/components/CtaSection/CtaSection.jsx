import React, { useRef, useEffect, useState } from "react";
import "./CtaSection.css";

// Import your actual phone mockup images here
import mockupLeft from "../../assets/cta-section1.webp";
import mockupRight from "../../assets/cta-section2.png";

const CtaSection = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress:
      // 0 = top of section enters bottom of screen
      // 1 = center of section reaches center of screen
      const rawProgress = (windowHeight - rect.top) / (windowHeight * 0.7);
      const clampedProgress = Math.max(0, Math.min(1, rawProgress));

      setScrollProgress(clampedProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate dynamic movement based on scroll progress
  // When progress is 0, they are pushed inward by 150px.
  // When progress is 1, they are pushed outward to 0px (their final corner position).
  const pushInward = (1 - scrollProgress) * 350;

  return (
    <section className="cta-section" ref={sectionRef}>
      <div className="cta-container">
        {/* Dynamic Left Phone */}
        <div
          className="cta-phone-left-wrapper"
          style={{
            transform: `translate(${pushInward}px, ${pushInward}px) rotate(50deg)`,
          }}
        >
          <div className="cta-glow left-glow"></div>
          <img
            src={mockupLeft}
            alt="App Interface Left"
            className="cta-phone-img"
          />
        </div>

        {/* Dynamic Right Phone */}
        <div
          className="cta-phone-right-wrapper"
          style={{
            transform: `translate(-${pushInward}px, -${pushInward}px) rotate(-50deg)`,
          }}
        >
          <div className="cta-glow right-glow"></div>
          <img
            src={mockupRight}
            alt="App Interface Right"
            className="cta-phone-img"
          />
        </div>

        {/* Center Content */}
        <div className="cta-content">
          <h2>
            Power Up Your <span className="highlight-orange">Productivity</span>
          </h2>
          <h3>Start Using Ginue Today!</h3>
          <p>
            The all-in-one AI app built to help you write smarter, respond
            faster, and create
            <br />
            better content — anytime, anywhere.
          </p>

          <div className="cta-buttons">
            <button className="download-btn btn-white">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.05 20.28c-.98.95-2.05 1.78-3.1 1.76-1.11-.02-1.46-.68-2.73-.68-1.28 0-1.68.66-2.73.69-1.05.02-2.13-.82-3.12-1.78-2-1.96-3.05-5.32-3.05-8.25 0-2.88 1.63-4.41 3.2-4.41 1.1 0 1.93.61 2.65.61.71 0 1.8-.68 3.12-.68 1.11 0 2.21.5 3.01 1.48-2.58 1.5-2.15 5.15.53 6.31-.96 1.78-2.18 3.52-3.78 4.95zM12.03 7.25c-.21-2.48 1.81-4.63 4.21-4.82.26 2.58-1.78 4.69-4.21 4.82z" />
              </svg>
              Download For IOS
            </button>
            <button className="download-btn btn-outlined">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17 19.12H7V4.88h10M16.5 2H7.5A1.5 1.5 0 0 0 6 3.5v17A1.5 1.5 0 0 0 7.5 22h9a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 16.5 2z" />
              </svg>
              Download For Android
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
