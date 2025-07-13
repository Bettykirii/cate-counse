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
        <div className="page-container">
            <div className="content">
                <div className="contact-container">
                    <div className="contact-info">
                        <h1>Get in Touch</h1>
                        <p><strong>PHONE:</strong> +123 456 7890</p>
                        <p><strong>ADDRESS:</strong> 123 Main St</p>
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
                            <p className="submit-text">Submit</p>
                        </form>
                        {status && <p>{status}</p>}
                    </div>
                </div>
            </div>
            <div className="map-container">
           <iframe
        src="https://www.google.com/maps/embed?pb=https://www.google.com/maps/dir/Waterfalls+Inn+Tigoni//@-1.1152993,36.7038631,14z/data=!4m8!4m7!1m5!1m1!1s0x182f275943c71bb7:0x19b4e9aae81f146!2m2!1d36.6910013!2d-1.12069!1m0?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
        width="1000%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
    >
    </iframe>
</div>
        </div>
        
    );
};

export default Contact;
