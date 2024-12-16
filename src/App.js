import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Sessions from './Components/Sessions';

 import Footer from './Components/Footer';

function App() {
    return (
        <div className="App">
     
            <Router>
            <Header />
            <main>
            <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Sessions" element={<Sessions />} />


                <Route path="/Contact" element={<Contact />} />
                </Routes>

                </main>
            <Footer /> 
            </Router>
        </div>
    );
}

export default App;
