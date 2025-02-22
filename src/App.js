import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Department from './components/Department';
import Home from './views/home';
import Notfound from "./views/Notfound";
import About from './views/About';
import Contact from './views/Contact';
import News from './views/News';
import Auth from './views/Auth';
import Cardiology from './views/Cardiology';
import Neurology from './views/Neurology';
import Orthopedics from './views/Orthopedics';
import GeneralMedicine from './views/GeneralMedicine';
import Nutrition from './views/Nutrition';
import Pediatrics from './views/Pediatrics';
import Ophthalmology from './views/Opthalmology';

const App = () => {
    const [users, setUsers] = useState([]);



    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/department" element={<Department />} />
                <Route path="/news" element={<News />} />
                <Route path="/about" element={<About />} />
                <Route path="/auth" element={<Auth />} />

                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Notfound />} />
                <Route path="/department/cardiology" element={<Cardiology />} />
                <Route path="/department/neurology" element={<Neurology />} />
                <Route path="/department/orthopedics" element={<Orthopedics />} />
                <Route path="/department/ophthalmology" element={<Ophthalmology />} />
                <Route path="/department/pediatrics" element={<Pediatrics />} />
                <Route path="/department/nutrition" element={<Nutrition />} />
                <Route path="/department/general-medicine" element={<GeneralMedicine />} />
            </Routes>
        </Router>
    );
};

export default App;
