import React from 'react';
import Navbar from '../components/Navbar';
import './Department.css';
import Meetdoc from '../components/Meetdoc';

const Department = (props) => {
    return (
        <div>
            <Navbar />
            <div className="hero">
                Cardiology Department - Consult Cardiologist
            </div>
            <div className="department-container">
                <div className="depdet">
                    <h2>Cardiology Department</h2>
                    <p>
                        An excellent team of dedicated cardiologists, cardiothoracic surgeons,
                        anesthetists, perfusionists, nursing, and other paramedical staff make
                        cardiac care complete and affordable at Peerless Hospital.
                    </p>
                    <p>
                        We have a dedicated cath lab, modular operation theatres, modular ICCU,
                        ITU, CTVS ITU, and cardiac step-down ward to ensure safe treatment,
                        along with ambulances for comfortable transportation.
                    </p>
                    <h3>Cardiac Procedures & Surgeries:</h3>
                    <ul>
                        <li>Coronary and peripheral angiography</li>
                        <li>Coronary and peripheral angioplasty (stenting)</li>
                        <li>Pacemaker implantation</li>
                        <li>CRT and CRTD implantation</li>
                        <li>Single and Dual Chamber ICD Implantation</li>
                        <li>Device closure of ASD, VSD, PDA, and other defects</li>
                        <li>FFR, IVUS</li>
                        <li>Stenting of arteries - carotid, cerebral, renal, visceral, femoral, etc.</li>
                        <li>Balloon Aortic / Mitral / Pulmonary Valvuloplasty</li>
                        <li>Embolotherapy for visceral bleeding</li>
                    </ul>
                </div>
                <div className="department-image">
                    <img src="/Branding/cardiology-deprt.webp" alt="Cardiology Department" />
                </div>
            </div>
            <div className="meetdoc"><Meetdoc /></div>


        </div>
    );
};

export default Department;
