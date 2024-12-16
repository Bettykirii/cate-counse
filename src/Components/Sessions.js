import React from 'react';
import { useNavigate } from "react-router-dom";
import './Styles/Sessions.css';

const Sessions = () => {

    const navigate = useNavigate();

    const handleContactClick = () => {
      navigate("/Contact"); // Redirect to the Say Hello page
    };
  
    return (
        <div className="therapy-intro-container">
          
            <h1>Let's Take  the First Step</h1>
          
    
          <section className="intro-text">
            <p>
            When you have never seen a therapist before, it is sometimes difficult to envision what therapy is, what it can do for you or 
            whether this is the right time for you to start. For this reason, I offer the first session free of charge, 
            with no obligation to take up counselling with me. 
            In this session, I will explain in more detail how I work and you can ask any questions you may have.
            </p>
            <p>
              My invitation is for you to come just as you are, wherever you are, and attend to all emotions that arise for you so that in life, you may show up in your truest form.
            </p>
          </section>
    
          <div className="fees-section">
      {/* Left Box */}
      <div className="fees-box">
        <h2>FEES</h2>
        <div className="fee-item">
          <h3>Individual Therapy</h3>
          <p>$240</p>
          <p>50-minute session</p>
        </div>
        
      </div>

      {/* Right Box */}
      <div className="forms-box">
        <h2>FEES</h2>
        <div className="fee-item">
          <h3>Couples or Family Therapy</h3>
          <p>$250</p>
          <p>60-minute session</p>
        </div>
      </div>
    </div>
    
          
          <section className="contact-section">
            <h2>Let's Get in Touch</h2>
            <p>Feel free to give me a call. I offer a 20-minute complimentary phone consultation and I would love to hear from you.</p>
            <button className="contact-button" onClick={handleContactClick}>
          Contact Me
        </button>
            {/* <p>Catherine Mitchell</p> */}
          </section>
        </div>
      );
    };

export default Sessions;
