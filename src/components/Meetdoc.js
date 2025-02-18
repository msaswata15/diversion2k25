import React from 'react'
import './Meetdoc.css'
import Doctor from './doctor'
const Meetdoc = () => {
    return (
        <section className="home-meet">
            <div className="home-heading28">
                <h2 className="home-text91">Meet our doctors</h2>
                <p className="home-text92">
                    Get to know our experienced doctors dedicated to providing expert
                    care, compassion, and personalized treatment.
                </p>
            </div>
            <div className="home-list2">
                <div className="home-controls">
                    <img
                        alt="image"
                        src="/Icons/circle-arrow.svg"
                        data-doctors="previous"
                        className="arrow"
                    />
                    <img
                        alt="image"
                        src="/Icons/circle-arrow.svg"
                        data-doctors="next"
                        className="home-forward arrow"
                    />
                </div>
                <div data-teleport="doctors" className="home-doctors1">
                    <Doctor></Doctor>
                    <Doctor imageSrc="/Doctors/doctor-2-300w.png"></Doctor>
                    <Doctor imageSrc="/Doctors/doctor-3-300w.png"></Doctor>
                    <Doctor imageSrc="/Doctors/doctor-4-300w.png"></Doctor>
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
    )
}

export default Meetdoc