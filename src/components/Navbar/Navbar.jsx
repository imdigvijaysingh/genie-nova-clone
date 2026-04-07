import React from "react";
import logoNav from "../../assets/logo-nav.webp";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <button className="nav-logo">
        <img src={logoNav} alt="Navigation Logo" />
      </button>
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#feature">Feature</a>
        </li>
        <li>
          <a href="#tools">Tools</a>
        </li>
        <li>
          <a href="#review">Review</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
      </ul>
      <button className="cta-button">
        <span className="btn-text-wrapper" data-text="Get Started for Free">
          <span>Get Started for Free</span>
        </span>
        <span className="arrow-icon" data-icon="↗">
          <span>↗</span>
        </span>
      </button>
    </nav>
  );
};

export default Navbar;
