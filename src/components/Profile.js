import React from "react";
import "./Profile.css";

const profileFields = [
  "Full Name",
  "Email",
  "Phone Number",
  "Address",
  "Gender",
  "Date of Birth",
];

const Details = [
  "John Doe",
  "john@example.com",
  "1234567890",
  "123 Main St, Anytown, USA",
  "Male",
  "1990-01-01",
];

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-content">
        {/* Left Side: Profile Picture */}
        <div className="profile-picture-container">
          <img
            src="https://images.unsplash.com/photo-1739741432363-8f5fa6ef4e7d?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile"
            className="profile-picture"
          />
        </div>

        {/* Right Side: Personal Info */}
        <div className="profile-details">
          {profileFields.map((field, index) => (
            <div key={index} className="profile-info">
              <strong>{field}:</strong> {Details[index]}
            </div>
          ))}
          <button className="edit-button">Edit Profile</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
