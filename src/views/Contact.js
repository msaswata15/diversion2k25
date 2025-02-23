import React from "react";
import Navbar from "../components/Navbar";
import Appprom from "../components/Appprom";
import Footer from "../components/Footer";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="patient-container">
        <h2>Patient Details Form</h2>
        <form className="form-container">
          <label>Name:</label>
          <input
            type="text"
            className="input-field"
            placeholder="Enter patient's name"
          />

          <label>Age:</label>
          <input
            type="number"
            className="input-field"
            placeholder="Enter patient's age"
          />

          <label>Contact Number:</label>
          <input
            type="text"
            className="input-field"
            placeholder="Enter contact number"
          />

          <label>Symptoms:</label>
          <textarea
            className="input-field"
            placeholder="Describe symptoms"
          ></textarea>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>

      <div className="info-container">
        <b>
          <h3>Hospital Address</h3>
          <p>
            Medica Healthcare, 123, Lal Bahadur Shastri Avenue, Sector 5, New
            Delhi, India – 110001.
          </p>
          <h3>Email : </h3>
          <p>contact@medicahealthcare.in</p>
          <h3>Emergency Contacts</h3>
          <p>Ambulance: 102</p>
          <p>Hospital Emergency: +91-9876543210</p>
          <p> 1800-123-4567</p>
        </b>
      </div>
      <Appprom />
      <Footer />
    </div>
  );
};

export default Contact;
