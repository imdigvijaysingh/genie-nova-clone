import React from "react";
import phoneImg from "../../assets/phone-img.png"; // Make sure this path is correct based on your folder structure
import "./PhoneMockup.css";

const PhoneMockup = ({ parallaxStyle }) => {
  return (
    <div className="phone-wrapper">
      <img
        src={phoneImg}
        alt="App interface on mobile"
        className="phone-mockup"
        style={parallaxStyle}
      />
    </div>
  );
};

export default PhoneMockup;
