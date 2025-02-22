import React from 'react'
import { Link } from "react-router-dom";

import './Navbar.css'
const Navbar = () => {
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
                    <nav className="home-links1">
                        <Link to="/department" className="home-link10">Departments</Link>

                        <Link to="/how-it-works" className="home-link12">News</Link>
                        <Link to="/about" className="home-link13">About</Link>
                        <Link to="/contact" className="home-link14">Contact</Link>
                    </nav>
                </div>
                <div className="home-right1">
                    <button className="home-phone button">
                        <img
                            alt="image"
                            src="/Icons/phone.svg"
                            className="home-image16"
                        />
                        <span className="home-text29">1800 101 6346</span>
                    </button>
                    <a href="#book" className="home-book1 button button-main">
                        <img
                            alt="image"
                            src="/Icons/calendar.svg"
                            className="home-image17"
                        />
                        <span className="home-text17">Book an appointment</span>
                    </a>
                </div>
                <div data-thq="thq-burger-menu" className="home-burger-menu">
                    <svg viewBox="0 0 1024 1024" className="home-icon2">
                        <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                </div>
                <div data-thq="thq-mobile-menu" className="home-mobile-menu">
                    <div
                        data-thq="thq-mobile-menu-nav"
                        data-role="Nav"
                        className="home-nav1"
                    >
                        <div className="home-container2">
                            <img
                                alt="image"
                                src="/Branding/logo-1500h.png"
                                className="home-image18"
                            />
                            <div data-thq="thq-close-menu" className="home-menu-close">
                                <svg viewBox="0 0 1024 1024" className="home-icon4">
                                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                                </svg>
                            </div>
                        </div>
                        <nav
                            data-thq="thq-mobile-menu-nav-links"
                            data-role="Nav"
                            className="home-nav2"
                        >
                            <Link to="/department" className="home-text18">Departments</Link>
                            <Link to="/how-it-works" className="home-text19">News</Link>
                            <Link to="/about" className="home-text20">About</Link>
                            <Link to="/contact" className="home-text21">Contact</Link>
                            <a href="#book" className="home-book2 button button-main">
                                <img
                                    alt="image"
                                    src="/Icons/calendar.svg"
                                    className="home-image19"
                                />
                                <span className="home-text22">Book an appointment</span>
                            </a>
                        </nav>
                    </div>
                </div>
            </header>
        </header>
    )
}

export default Navbar