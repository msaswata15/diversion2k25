import React from "react";
import "./Meetdoc.css";
import Doctor from "./doctor";

const Meetdoc = () => {
    return (
        <section className="home-meet">
            <div className="home-heading28">
                <h2 className="home-text91">Meet our Directors</h2>
                <p className="home-text92">
                    Meet our dedicated leaders committed to excellence in patient care,
                    innovation, and healthcare management, ensuring the highest standards
                    of service.
                </p>
            </div>
            <div className="home-list2">
                <div data-teleport="doctors" className="home-doctors1">
                    <Doctor
                        imageSrc="Doctors/doctor-1-300w.png"
                        heading="Dr. Atri Chatterjee"
                        text="President of Group HR at Medica Healthcare"
                    ></Doctor>
                    <Doctor
                        imageSrc="/Doctors/doctor-2-300w.png"
                        heading="Dr. Kumbhakar Das"
                        text="Executive Director of Medica Group of Hospitals "
                    ></Doctor>
                    <Doctor
                        imageSrc="/Doctors/doctor-3-300w.png"
                        heading="Dr. Ram Jaiswal"
                        text="Chairman of Medica Group of Hospitals "
                    ></Doctor>
                    <Doctor
                        imageSrc="/Doctors/doctor-4-300w.png"
                        heading="Dr. Krishna Roy"
                        text="CEO of Project and Consultancy Division at Medica Synergie."
                    ></Doctor>
                </div>
            </div>
            <div className="home-search2">
                <input
                    type="text"
                    placeholder="Search by name"
                    className="home-textinput6 input book-input"
                />
                <button className="button button-main home-book8">
                    <span>Search doctor</span>
                </button>
            </div>
        </section>
    );
};

export default Meetdoc;