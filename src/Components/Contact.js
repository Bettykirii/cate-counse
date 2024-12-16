

import React, { useState } from 'react';
import axios from 'axios';
import './Styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/send-email', formData);
            setStatus('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setStatus('Failed to send message. Please try again.');
        }
    };

    return (
     <>
        <div className="contact-container">

        <div className="contact-info">
        <h1>Get in Touch</h1>
        <p><strong>PHONE:</strong> +123 456 7890</p>
        <p><strong>ADDRESS:</strong> +123 456 7890</p>

        <p><strong>EMAIL:</strong> <a href="mailto:example@gmail.com">example@gmail.com</a></p>
    </div>

        <div className="contact-form-container">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required
                    />
            
                    <label>Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required
                    />
                    <label>Message:</label>
                    <textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required
                    />
            <p class="submit-text">Submit</p>
            </form>
            {status && <p>{status}</p>}
        </div>
        </div>

        </>
    );
};

export default Contact;
