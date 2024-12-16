import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Styles/style.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
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
            <nav className={isMenuOpen ? 'nav-open' : ''}>
                    <ul>
                        <li><a href="/About">About Me</a></li>
                        <li><a href="/Services">Services</a></li>
                        <li><a href="/sessions">Sessions and Fees</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><Link to="/Contact" className="cta-link">Say Hello</Link></li>
                    </ul>
                </nav>
                </div>
        </header>
    );
};

export default Header;
