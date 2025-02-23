import React from "react";
import Navbar from "./Navbar";
import "./Department.css";
import Meetdoc from "./Meetdoc";
import Appprom from "./Appprom";
import Footer from "./Footer";

const Department = ({ title, description = [], procedures = [], imageSrc }) => {
    return (
        <div>
            <Navbar />
            <div className="hero">
                {title} - Consult Specialist
            </div>
            <div className="department-container">
                <div className="depdet">
                    <h2>{title}</h2>
                    {description.length > 0 ? (
                        description.map((para, index) => <p key={index}>{para}</p>)
                    ) : (
                        <p>No description available.</p>
                    )}
                    <h3>Procedures & Surgeries:</h3>
                    {procedures.length > 0 ? (
                        <ul>
                            {procedures.map((procedure, index) => (
                                <li key={index}>{procedure}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No procedures listed.</p>
                    )}
                </div>
                <div className="department-image">
                    <img src={imageSrc} alt={title} />
                </div>
            </div>
            <div className="meetdoc"><Meetdoc /></div>
            <Appprom />
            <Footer />
        </div>
    );
};

export default Department;
