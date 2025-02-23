import React from "react";
import PropTypes from "prop-types";
import "./features.css";

const Features = (props) => {
  const handleClick = () => {
    if (props.title === "Virtual Assistant") {
      window.open("https://diseaseprediction-efvs7fabgbxj5cqynzez3e.streamlit.app/", "_blank");
    } else if (props.route) {
      window.location.href = props.route; // Internal navigation
    }
  };

  return (
    <div
      className="features-section quick-links"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
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
  title: PropTypes.string.isRequired,
  route: PropTypes.string, // Other features can have routes
};

export default Features;
