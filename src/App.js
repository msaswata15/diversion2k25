import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Department from './views/Department';
import Home from './views/home';
import Notfound from "./views/Notfound";
import About from './views/About';
import Contact from './views/Contact';
import News from './views/News';
import Auth from './views/Auth';

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
            </Routes>
        </Router>
    );
};

export default App;
