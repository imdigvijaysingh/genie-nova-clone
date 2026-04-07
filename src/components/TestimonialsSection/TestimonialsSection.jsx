import React from "react";
import "./TestimonialsSection.css";

const testimonials = [
  {
    id: 1,
    name: "Brandon Dorwart",
    title: "Founder at AZN LLC",
    text: "As a startup founder, I needed fast, reliable support—and this tool delivers every time. It's like having an extra team member.",
    avatar: "https://i.pravatar.cc/150?u=1",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    title: "Marketing Director",
    text: "The AI tools have completely transformed our content workflow. We are publishing twice as fast with higher engagement rates.",
    avatar: "https://i.pravatar.cc/150?u=2",
  },
  {
    id: 3,
    name: "Marcus Chen",
    title: "Freelance Copywriter",
    text: "I was skeptical at first, but the quality of the outputs is unmatched. It helps me overcome writer's block instantly.",
    avatar: "https://i.pravatar.cc/150?u=3",
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    title: "Product Manager",
    text: "Absolutely phenomenal. The seamless integration and intuitive UI make it a joy to use daily. Highly recommended for any team.",
    avatar: "https://i.pravatar.cc/150?u=4",
  },
  {
    id: 5,
    name: "David Kim",
    title: "SEO Specialist",
    text: "The built-in optimization tools are a game changer. I'm saving hours on research and seeing better rankings across the board.",
    avatar: "https://i.pravatar.cc/150?u=5",
  },
];

// Helper to create a single scrolling row
const MarqueeRow = ({ reverse }) => {
  // Shuffle array slightly for the reverse row so they don't look identical vertically
  const rowData = reverse ? [...testimonials].reverse() : testimonials;
  const loopData = [...rowData, ...rowData];

  return (
    <div className="marquee-wrapper">
      <div className={`marquee-track ${reverse ? "track-reverse" : ""}`}>
        {loopData.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="quote-icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="testimonial-author">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="author-avatar"
              />
              <div className="author-info">
                <h4>{testimonial.name}</h4>
                <span>{testimonial.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {/* Header */}
        <div className="testimonials-header">
          <h2>
            What Our Users <span className="highlight-orange">Say?</span>
          </h2>
          <p>
            Real feedback from people who've used our platform to
            <br />
            create, grow, and succeed.
          </p>
        </div>

        {/* Content Layout */}
        <div className="testimonials-content">
          {/* Fixed Left Card (Rating) */}
          <div className="fixed-rating-card">
            <div className="rating-score">4.8</div>
            <div className="rating-stars">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#f98b11"
                  stroke="#f98b11"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              ))}
            </div>
            <div className="avatar-group">
              <img src="https://i.pravatar.cc/150?u=10" alt="User" />
              <img src="https://i.pravatar.cc/150?u=11" alt="User" />
              <img src="https://i.pravatar.cc/150?u=12" alt="User" />
              <img src="https://i.pravatar.cc/150?u=13" alt="User" />
              <img src="https://i.pravatar.cc/150?u=14" alt="User" />
            </div>
            <p className="rating-subtitle">
              27K+ Downloads — Trusted by
              <br />
              Users for a Better Experience
            </p>
          </div>

          {/* RIGHT COLUMN: 3 Scrolling Rows */}
          <div className="marquee-stack">
            <MarqueeRow reverse={false} /> {/* Right to Left */}
            <MarqueeRow reverse={true} /> {/* Left to Right */}
            <MarqueeRow reverse={false} /> {/* Right to Left */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
