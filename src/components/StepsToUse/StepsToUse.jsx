import React, { useRef, useEffect, useState } from "react";
import "./StepsToUse.css";

// IMPORT YOUR 4 MOCKUP IMAGES HERE
import mockup1 from "../../assets/how-it-works-img-1.webp";
import mockup2 from "../../assets/how-it-works-img-2.webp"; // Replace with image 2
import mockup3 from "../../assets/how-it-works-img-3.webp"; // Replace with image 3
import mockup4 from "../../assets/how-it-works-img-4.webp"; // Replace with image 4

const images = [mockup1, mockup2, mockup3, mockup4];

const stepsData = [
  {
    title: (
      <>
        Choose Assistant and <span className="steps-gradient">Template</span>
      </>
    ),
    desc: "Start by selecting an AI assistant or a ready-made content template that fits your specific needs—whether you're writing a blog post, crafting a social media caption, or generating product descriptions. Each assistant is optimized for different content types to save you time and effort.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
        <line x1="9" y1="21" x2="9" y2="9"></line>
      </svg>
    ),
  },
  {
    title: (
      <>
        Enter Prompt <span className="steps-gradient">or</span>
        <br />
        Details
      </>
    ),
    desc: "Provide a few keywords, a short prompt, or detailed instructions—whatever you have. Our intuitive interface makes it easy for anyone to describe their idea without needing to worry about formatting or structure.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="4 7 4 4 20 4 20 7"></polyline>
        <line x1="9" y1="20" x2="15" y2="20"></line>
        <line x1="12" y1="4" x2="12" y2="20"></line>
      </svg>
    ),
  },
  {
    title: (
      <>
        Generate <span className="steps-gradient">Content</span>
        <br />
        Instantly
      </>
    ),
    desc: "Provide a few keywords, a short prompt, or detailed instructions—whatever you have. Our intuitive interface makes it easy for anyone to describe their idea without needing to worry about formatting or structure.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
      </svg>
    ),
  },
  {
    title: (
      <>
        Your <span className="steps-gradient">Creative</span> History
      </>
    ),
    desc: "Easily revisit, refine, and reuse your past ideas. Our smart history feature helps you keep track of your creativity without losing momentum.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
      </svg>
    ),
  },
];

const StepsToUse = () => {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Tracking scroll relative to section size
      const maxScroll = rect.height - windowHeight;
      const currentScroll = -rect.top;

      let scrollFraction = 0;
      if (maxScroll > 0) {
        scrollFraction = Math.max(0, Math.min(1, currentScroll / maxScroll));
      }

      setProgress(scrollFraction);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Map progress (0 to 1) to active index (0, 1, 2, 3)
  const activeIndex = Math.min(3, Math.floor(progress * 4));

  // Map progress (0 to 1) to rotation (Starts 15deg tilted, ends 0deg straight)
  const currentRotation = 15 - progress * 15;

  return (
    <section className="steps-scroller-section" ref={sectionRef}>
      <div className="steps-scroller-container">
        {/* LEFT COLUMN: Sticky Phone */}
        <div className="sticky-phone-col">
          <div className="steps-phone-glow"></div>

          <div
            className="phone-image-wrapper"
            style={{ transform: `rotate(${currentRotation}deg)` }}
          >
            {/* OVERLAP LOGIC: 
                We use index as zIndex so Image 1 is lowest, Image 4 is highest.
                Conditional class applies the 'rise-in' transition. */}
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Step ${idx + 1} Interface`}
                /* NEW CONDITIONAL CLASS: It stays active if activeIndex is >= index. 
                   This keeps older mockups underneath the newer ones. */
                className={`steps-phone-mockup ${activeIndex >= idx ? "image-visible" : ""}`}
                style={{
                  zIndex: idx, // Forces the stacking order based on index (0, 1, 2, 3)
                }}
              />
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Scrolling Text Steps */}
        <div className="scrolling-steps-col">
          {stepsData.map((step, index) => (
            <div
              key={index}
              className={`step-scroll-block ${activeIndex === index ? "step-active" : ""}`}
            >
              <div className="steps-icon-wrapper">{step.icon}</div>
              <div className="steps-content">
                <h2>{step.title}</h2>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsToUse;
