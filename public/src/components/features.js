import React from "react";

import PropTypes from "prop-types";

import "./features.css";
const Details = [
  {
    title: "Virtual Assistant",
    icon: "/Icons/arrow.svg",
    description:
      "A virtual assistant streamlines hospital operations by managing appointments, handling patient inquiries, supporting medical records, and enhancing telemedicine services, allowing healthcare professionals to focus on patient care.",
  },
  {
    title: "Virtual Clinic",
    icon: "/Icons/clinic.svg",
    description:
      "Access consultations, prescriptions, and expert medical advice remotely with our Virtual Clinic, providing healthcare at your convenience.",
  },
  {
    title: "Clinical Lab",
    icon: "/Icons/lab.svg",
    description:
      "Receive fast, secure, and accurate test results online, ensuring quick and informed decision-making for better patient outcomes.",
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
  description: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
};

const FeaturesSection = () => {
  return (
    <div className="features-container">
      {Details.map((title, icon, description) => (
        <Features key={index} {...detail} />
      ))}
    </div>
  );
};

export default Features;
