import React from 'react'
import Navbar from '../components/Navbar'
import Appprom from '../components/Appprom'
import Footer from '../components/Footer'
import './home.css'
const News = () => {
    return (
        <div>
            <div className="nav"><Navbar /></div>
            <div className="app"><Appprom /></div>
            <div className="foot">
                <Footer />
            </div>
        </div>
    )
}

export default News