import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Department from './views/Department';
import Home from './views/home';
import Notfound from "./views/Notfound";
import About from './views/About';
import Contact from './views/Contact';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/department" element={<Department />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Notfound />} />
            </Routes>
        </Router>
    );
};

export default App;
