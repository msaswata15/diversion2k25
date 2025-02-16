import React from "react";

import PropTypes from "prop-types";

import "./features.css";

const FeatureList = [
  {
    title: "Virtual Clinic",
    description:
      "Connect with doctors anytime, anywhere for consultations, prescriptions, and expert medical advice—all from the comfort of your home.",
    icon: "/Icons/arrow.svg",
  },
  {
    title: "Virtual Assistant",
    description:
      "Effortlessly manage appointments, access health information, and get instant support—enhancing convenience, communication, and care.",
    icon: "/Icons/arrow.svg",
  },
  {
    title: "Clinical Lab",
    description:
      "Get fast, secure, and accurate test results online, ensuring timely access to vital health insights for better decision-making.",
    icon: "/Icons/arrow.svg",
  },
];

const Features = (props) => {
  return (
    <div className="features-section quick-links">
      <div className="features-heading">
        <h3 className="features-header">{props.title}</h3>
        <img alt="image" src={props.icon} className="features-icon" />
      </div>
      <p className="features-text">{props.description}</p>
      <div className="features-divider"></div>
    </div>
  );
};

Features.propTypes = {
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const FeaturesSection = () => {
  return (
    <div className="features-container">
      {FeatureList.map((feature, index) => (
        <Features key={index} {...feature} />
      ))}
    </div>
  );
};

export default Features;
