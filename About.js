import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Appprom from "../components/Appprom";
import "./About.css";

const images = [
  "https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1667238368405-7a07949bb7a6?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1619070284836-e850273d69ac?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1640500181344-c2c553585992?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-about">
      <Navbar />

      {/* Image Carousel */}
      <div className="carousel-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Hospital ${index + 1}`}
            className={`carousel-image ${
              index === currentIndex ? "active" : ""
            }`}
          />
        ))}
      </div>

      {/* Welcome Section */}
      <div className="welcome">
        <p>
          <i>
            Welcome to Medicare Hospital, a beacon of healthcare excellence
            serving the community for over 36 years...
          </i>
        </p>
      </div>

      {/* About Content */}
      <div className="content">
        <h2>A Legacy of Excellence</h2>
        <p>
          Since its inception, Medicare Hospital has been at the forefront of
          clinical excellence, patient-centered care...
        </p>

        <h2>State-of-the-Art Facilities</h2>
        <ul>
          <li>
            Multi-Specialty Departments covering cardiology, neurology,
            orthopedics...
          </li>
          <li>
            24/7 Emergency & Trauma Care, ensuring immediate medical
            attention...
          </li>
          <li>
            Advanced Diagnostic & Imaging Services, including MRI, CT scans...
          </li>
          <li>
            World-Class Operation Theaters with the latest surgical
            technology...
          </li>
        </ul>

        <h2>Compassion Meets Innovation</h2>
        <p>
          At Medicare Hospital, medical expertise meets a human touch. Every
          member of our team is dedicated to providing care...
        </p>

        <p>
          Experience the best in healthcare at Medicare Hospital—where care
          meets commitment.
        </p>
      </div>
      <Appprom />
      <Footer />
    </div>
  );
};

export default About;
