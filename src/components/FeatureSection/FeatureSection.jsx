import React from "react";
import "./FeatureSection.css";

const FeatureSection = () => {
  return (
    <section className="feature-section">
      {/* Top Partners Ribbon */}
      <div className="partners-banner">
        <p className="partners-title">Used by the Most Innovative Companies</p>

        <div className="partners-track-container">
          <div className="partners-track">
            {/* Group 1: The original logos */}
            <div className="partners-group">
              <span className="partner-logo">≎ Lightbox</span>
              <span className="partner-logo">✣ Goodluck</span>
              <span className="partner-logo">✸ Sunwave</span>
              <span className="partner-logo">⬡ GlobalBank</span>
              <span className="partner-logo">⟡ AnovaLuck</span>
            </div>

            {/* Group 2: The duplicate for a seamless infinite loop */}
            <div className="partners-group" aria-hidden="true">
              <span className="partner-logo">≎ Lightbox</span>
              <span className="partner-logo">✣ Goodluck</span>
              <span className="partner-logo">✸ Sunwave</span>
              <span className="partner-logo">⬡ GlobalBank</span>
              <span className="partner-logo">⟡ AnovaLuck</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Heading */}
      <div className="feature-heading-container">
        <h2 className="feature-heading">
          What Makes Genie the <span className="highlight-text">Best</span>
          <br />
          GPT App for Your Nee<span className="highlight-text">ds?</span>
        </h2>
      </div>
    </section>
  );
};

export default FeatureSection;
