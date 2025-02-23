import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRef = useRef(null);

    const departments = [
        { name: "General Medicine", link: "/department/general-medicine" },
        { name: "Cardiology", link: "/department/cardiology" },
        { name: "Neurology", link: "/department/neurology" },
        { name: "Pediatrics", link: "/department/pediatrics" },
        { name: "Ophthalmology", link: "/department/ophthalmology" },
        { name: "Nutrition", link: "/department/nutrition" },
        {
            name: "Orthopedics", link: "/department/orthopedics"
        },

    ];

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
        <header className="home-header17">
            <header data-thq="thq-navbar" className="home-navbar">
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
                    <nav className={`home-links1 ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
                        {/* Departments Dropdown */}
                        <div className="dropdown-container" ref={dropdownRef}>
                            <button
                                className="home-link10 dropdown-button"
                                onClick={() => setShowDropdown((prev) => !prev)}
                            >
                                Departments ▾
                            </button>
                            {showDropdown && (
                                <div className="dropdown-menu">
                                    {departments.map((dept, index) => (
                                        <Link
                                            key={index}
                                            to={dept.link}
                                            className="dropdown-item"
                                            onClick={() => setShowDropdown(false)}
                                        >
                                            {dept.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link to="/news" className="home-link12">News</Link>
                        <Link to="/about" className="home-link13">About</Link>
                        <Link to="/contact" className="home-link14">Contact</Link>
                    </nav>
                </div>

                <div className="home-right1">
                    <button className="home-phone button" onClick={() => window.location.href = "tel:9830559040"}>
                        <img alt="Call Icon" src="/Icons/phone.svg" className="home-image16" />
                        <span className="home-text29">1800 101 6346</span>
                    </button>

                    <a href="/auth" className="home-book1 button button-main">
                        <img alt="image" src="/Icons/calendar.svg" className="home-image17" />
                        <span className="home-text17">Book an appointment</span>
                    </a>
                </div>
            </header>
        </header>
    );
};

export default Navbar;