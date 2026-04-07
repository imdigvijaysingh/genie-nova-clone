import React, { useState } from "react";
import "./Pricing.css";

const pricingData = [
  {
    name: "Free",
    priceMonthly: "0",
    priceAnnual: "0",
    desc: "Great for creators, marketers & job seekers",
    features: [
      "Access to Grammar Checker & Paraphraser",
      "Limited uses of AI Email Writer & Social Tools",
      '"Ask Me Anything" Bot (5 prompts/day)',
      "Access to Grammar Checker & Paraphraser",
    ],
    buttonText: "Started Free",
    isPopular: false,
  },
  {
    name: "Pro Plan",
    priceMonthly: "15", // Example monthly price
    priceAnnual: "12",
    desc: "Great for creators, marketers & job seekers",
    features: [
      "Unlimited Writing Tools Access",
      "Full access to Email & Social Tools",
      "Video Tools (Social Media)",
      '"Ask Me Anything" Bot - Unlimited',
    ],
    buttonText: "Started Free",
    isPopular: true,
  },
  {
    name: "Team Plan",
    priceMonthly: "49", // Example monthly price
    priceAnnual: "39",
    desc: "Great for creators, marketers & job seekers",
    features: [
      "Everything in Pro Plan",
      "Multi-user Access (up to 5 seats)",
      "Custom Tool Requests",
      "Team Analytics Dashboard",
    ],
    buttonText: "Started Free",
    isPopular: false,
  },
];

// Reusable Checkmark SVG component
const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="check-icon"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="pricing-section">
      <div className="pricing-container">
        {/* Header Section */}
        <div className="pricing-header">
          <h2>
            Pricin<span className="highlight-orange">g</span>
          </h2>
          <p>
            Find a plan that fits your needs. Start for free, no credit card
            required.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="pricing-toggle-wrapper">
          <div className="pricing-toggle">
            <button
              className={`toggle-btn ${isAnnual ? "active" : ""}`}
              onClick={() => setIsAnnual(true)}
            >
              Annual (-20%)
            </button>
            <button
              className={`toggle-btn ${!isAnnual ? "active" : ""}`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid">
          {pricingData.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.isPopular ? "popular-card" : ""}`}
            >
              <h3 className="plan-name">{plan.name}</h3>

              <div className="plan-price-wrapper">
                <span className="price-currency">$</span>
                <span className="price-amount">
                  {isAnnual ? plan.priceAnnual : plan.priceMonthly}
                </span>
                <span className="price-period">
                  /{isAnnual ? "Annual" : "Monthly"}
                </span>
              </div>

              <div className="plan-divider"></div>

              <p className="plan-desc">{plan.desc}</p>

              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <div className="check-circle">
                      <CheckIcon />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`plan-btn ${plan.isPopular ? "btn-orange" : "btn-white"}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
