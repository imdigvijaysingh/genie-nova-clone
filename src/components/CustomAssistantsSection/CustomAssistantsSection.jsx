import React, { useState } from "react";
import "./CustomAssistantsSection.css";

// --- IMPORT YOUR ACTUAL PORTRAIT IMAGES HERE ---
import chefPortrait from "../../assets/assistant-1.webp";
import writerPortrait from "../../assets/assistant-2.webp";
import tutorPortrait from "../../assets/assistant-3.webp";
import moviePortrait from "../../assets/assistant-4.webp";
import fitnessPortrait from "../../assets/assistant-5.webp";
import languagePortrait from "../../assets/assistant-6.webp";

// SVG Icons Component
const Icon = ({ name }) => {
  const icons = {
    chef: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 13.87A4 4 0 0 1 7.41 6.58 4 4 0 0 1 12 2a4 4 0 0 1 4.59 4.58A4 4 0 0 1 18 13.87V21H6Z" />
        <path d="M6 17h12" />
      </svg>
    ),
    writer: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
    tutor: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <path d="M10 6v8" />
      </svg>
    ),
    movie: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <path d="M11 8v6" />
        <path d="M8 11h6" />
      </svg>
    ),
    fitness: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 12h-5m0 0a3 3 0 1 1-3-3" />
        <path d="M18 18V6" />
        <path d="M6 6v12" />
      </svg>
    ),
    language: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    arrowDown: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    ),
  };
  return icons[name] || null;
};

// Main Component
const CustomAssistantsSection = () => {
  const [activeAssistantIndex, setActiveAssistantIndex] = useState(0);

  // The complete data array for all 6 assistants
  const assistantsData = [
    {
      id: 0,
      iconName: "chef",
      title: "AI Chef Expert",
      description:
        "Get recipe ideas, meal plans, and cooking tips tailored to your taste.",
      imageSrc: chefPortrait,
      //   imageSrc: placeholderImg,
      imageAlt: "Portrait of female AI Chef",
    },
    {
      id: 1,
      iconName: "writer",
      title: "Creative Writing Assistant",
      description:
        "Brainstorm plots, refine dialogue, and improve your storytelling.",
      imageSrc: writerPortrait,
      //   imageSrc: {placeholderImg},
      imageAlt: "Portrait of person writing",
    },
    {
      id: 2,
      iconName: "tutor",
      title: "Friendly Math Tutor",
      description: "Solve problems, understand formulas, and ace your tests.",
      imageSrc: tutorPortrait,
      //   imageSrc: placeholderImg,
      imageAlt: "Portrait of friendly tutor",
    },
    {
      id: 3,
      iconName: "movie",
      title: "Movie Guide Bot",
      description: "Discover perfect film recommendations and fun facts.",
      imageSrc: moviePortrait,
      //   imageSrc: placeholderImg,
      imageAlt: "Portrait of person watching movie reel",
    },
    {
      id: 4,
      iconName: "fitness",
      title: "History Knowledge Buddy",
      description: "Personalized workout routines and mindfulness techniques.",
      imageSrc: fitnessPortrait,
      //   imageSrc: placeholderImg,
      imageAlt: "Portrait of wellness coach",
    },
    {
      id: 5,
      iconName: "language",
      title: "Career Advice Coach",
      description:
        "Practice conversations and improve fluency in new languages.",
      imageSrc: languagePortrait,
      //   imageSrc: placeholderImg,
      imageAlt: "Portrait of language learning partner pointing at globe",
    },
  ];

  const activeAssistant = assistantsData[activeAssistantIndex];

  return (
    <section className="assistants-section">
      <div className="assistants-container">
        {/* HEADER AREA */}
        <div className="assistants-header">
          <h1>
            Custom AI Assistan<span className="design-highlight">ts</span>
            <br />
            Designed for You
          </h1>
          <p>
            Interact with AI personalities tailored to your needs—whether you're
            writing,
            <br />
            researching, brainstorming, or planning.
          </p>
          <div className="assistants-downloads">
            <button className="download-btn btn-white">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17 19.12H7V4.88h10M16.5 2H7.5A1.5 1.5 0 0 0 6 3.5v17A1.5 1.5 0 0 0 7.5 22h9a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 16.5 2z" />
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

        {/* MAIN INTERACTION AREA */}
        <div className="assistants-main">
          {/* LEFT COLUMN: Dynamic Image */}
          <div className="assistant-display-image">
            <div className="assistants-cards-glow"></div>
            <img
              src={activeAssistant.imageSrc}
              alt={activeAssistant.imageAlt}
              className="portrait-image"
            />
          </div>

          {/* RIGHT COLUMN: Tab/Accordion List */}
          <div className="assistant-tabs-list">
            {assistantsData.map((assistant, index) => {
              const isActive = index === activeAssistantIndex;
              return (
                <div
                  key={assistant.id}
                  className={`assistant-tab-row ${isActive ? "tab-active" : ""}`}
                  onClick={() => setActiveAssistantIndex(index)}
                >
                  {/* Row content area */}
                  <div className="tab-header-area">
                    <div className="tab-icon-and-title">
                      <div className="tab-icon">
                        <Icon name={assistant.iconName} />
                      </div>
                      <h3>{assistant.title}</h3>
                    </div>
                    <div
                      className={`tab-arrow ${isActive ? "arrow-rotate" : ""}`}
                    >
                      <Icon name="arrowDown" />
                    </div>
                  </div>

                  {/* Dynamic description (Accordion style animation) */}
                  <div
                    className={`tab-description-container ${isActive ? "desc-expanded" : ""}`}
                  >
                    <p className="tab-description">{assistant.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomAssistantsSection;
