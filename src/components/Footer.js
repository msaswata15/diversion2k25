import React from 'react'
import './Navbar.css'
const Footer = () => {
    return (

        <div className="home-footer">
            <div className="home-left2">
                <div className="home-brand">
                    <img
                        alt="image"
                        src="/Branding/logo-2.svg"
                        className="home-image42"
                    />
                    <p className="home-text102">
                        Privacy Policy | Terms & Conditions <br /> Online payment & refund
                        policy <br />
                        Gifting Policy | Tele-consult | Sitemap | Contact Us <br />
                        Contact | Partners
                    </p>
                </div>
                <div className="home-socials">
                    <div className="social">
                        <img
                            alt="image"
                            src="/Icons/insider.svg"
                            className="home-image43"
                        />
                    </div>
                    <div className="social">
                        <img
                            alt="image"
                            src="/Icons/instagram.svg"
                            className="home-image44"
                        />
                    </div>
                    <div className="social">
                        <img
                            alt="image"
                            src="/Icons/twitter.svg"
                            className="home-image45"
                        />
                    </div>
                </div>
                <div className="home-legal1">
                    <span className="home-copyright1">
                        © 2024 Medica Healthcare. All Rights Reserved.
                    </span>
                    <span className="legal-link">Privacy Policy</span>
                    <span className="legal-link">Terms of Use</span>
                </div>
            </div>
            <div className="home-right2">
                <div className="home-list4">
                    <span className="home-header27">Menu</span>
                    <div className="home-links2">
                        <span className="home-link15">Home</span>
                        <span className="home-link16">About</span>
                        <span className="home-link17">Services</span>
                        <span className="home-link18">Blog</span>
                        <span className="home-link19">Support</span>
                    </div>
                </div>
                <div className="home-list5">
                    <span className="home-header28">Resources</span>
                    <div className="home-links3">
                        <span className="home-link20">Test Results</span>
                        <span className="home-link21">Patients</span>
                        <span className="home-link22">Doctors</span>
                        <span className="home-link23">Health</span>
                    </div>
                </div>
                <div className="home-list6">
                    <span className="home-header29">Contact</span>
                    <div className="home-links4">
                        <span className="home-link24">
                            123, Lal Bahadur Shastri Avenue, Sector 5, New Delhi, India –
                            110001
                        </span>
                        <a
                            href="mailto:contact@template.new?subject=Main"
                            className="home-link25"
                        >
                            contact@medicahealthcare.in
                        </a>
                        <a href="tel:(004) 234 - 5678" className="home-link26">
                            1800-123-4567
                        </a>
                    </div>
                </div>
            </div>
            <div className="home-legal2">
                <div className="home-row4">
                    <span className="legal-link">Privacy Policy</span>
                    <span className="legal-link">Terms of Use</span>
                </div>
                <span className="home-copyright6">
                    © 2024 Medica Healthcare. All Rights Reserved.
                </span>
            </div>
        </div>

    )
}

export default Footer