import React from 'react';
import './Styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-container">
            {/* Contact Information */}
            <div className="footer-column">
                <h4>Contact</h4>
                <p>Email: info@example.com</p>
                <p>Phone: +1 (234) 567-890</p>
            </div>

            {/* About Section */}
            <div className="footer-column">
                <h4>About</h4>
                <p>
                    Catherine Mitchell Therapy is committed to helping you embrace your true self.
                    Together, we work toward meaningful change and growth.
                </p>
            </div>

            {/* Social Media Links */}
            <div className="footer-column">
                <h4>Follow Us</h4>
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Catherine Mitchell Therapy. All rights reserved.</p>
        </div>
    </footer>

    );
};

export default Footer;
