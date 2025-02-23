import React from 'react'
import './Navbar.css'
const Appprom = () => {
    return (
        <div className="home-download">
            <div className="home-main2">
                <img alt="image" src="/phone-1500w.png" className="home-image39" />
                <div className="home-content22">
                    <h2 className="home-text99">
                        Download our mobile app and book your next appointment
                    </h2>
                    <div className="home-buttons">
                        <button className="home-ios button button-main">
                            <img
                                alt="image"
                                src="/Icons/apple.svg"
                                className="home-image40"
                            />
                            <span>Download for iOS</span>
                        </button>
                        <button className="button button-main home-android">
                            <img
                                alt="image"
                                src="/Icons/android.svg"
                                className="home-image41"
                            />
                            <span>Download for Android</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appprom