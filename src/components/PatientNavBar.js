import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const PatientNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  return (
    <header
      className="home-header17"
      style={{
        border: "4px solid #ccc",
        backgroundColor: "whitesmoke",
      }}
    >
      <header data-thq="thq-navbar" className="home-navbar1">
        <div className="home-left1">
          <Link to="/">
            <img
              alt="Company Logo"
              src="/Branding/logo-1500h.png"
              className="home-logo"
            />
          </Link>

          {/* Hamburger Menu for Mobile */}
          <div className="hamburger-menu" onClick={toggleMobileMenu}>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </div>

          {/* Navigation Links */}
        </div>

        <div className="home-right1">
          <button className="home-phone button">
            <span className="home-text29">Saswata Mondal</span>
          </button>

          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </header>
    </header>
  );
};

export default PatientNavbar;
