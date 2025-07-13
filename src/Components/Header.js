import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Styles/style.css'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="navbar">
                <h1 className="text-logo">
                    <a href="/">Catherine Mitchell</a>
                </h1>
                <button className="menu-toggle" onClick={toggleMenu}>
                    &#9776; {/* Hamburger Icon */}
                </button>
                <nav className={isMenuOpen ? 'nav-open' : 'nav-closed'}>
                    <ul>
                        <li><a href="/About" onClick={closeMenu}>About Me</a></li>
                        <li><a href="/Services" onClick={closeMenu}>Services</a></li>
                        <li><a href="/sessions" onClick={closeMenu}>Sessions and Fees</a></li>
                        <li><a href="/Faq" onClick={closeMenu}>FAQs</a></li>
                        <li><Link to="/Contact" className="cta-link" onClick={closeMenu}>Say Hello</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
