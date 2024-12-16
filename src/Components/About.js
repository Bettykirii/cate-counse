// src/components/About.js
import React from 'react';
import './Styles/About.css'; // Importing CSS for styling
import ProfileImage from '../Images/nature.jpg'; // Replace with your actual image path


const About = () => {
    return (
        <>
         <div className="about-me-container">
      <div className="text-section">
        <h1 className="title">Get to know Catherine Mitchell</h1>
        <p className="paragraph">
          I remember feeling incredibly vulnerable when I reached out for
          support through therapy. I was guarded, and accustomed to telling
          those around me that, "everything was alright." But it wasn't. Therapy
          was a gift that I didn’t know I needed. My feelings mattered, and my
          pain was seen. Through therapy, I not only felt acceptance and
          validation but was also empowered to be more authentically myself.
        </p>
        <p className="paragraph">
          As a therapist, I want to encourage others to reach out and experience
          the benefits of therapy. Every therapist has their own unique way of
          working with people. My therapeutic style is rooted in the belief that
          people are intrinsically valued and are deserving of fundamental human
          connection; to be seen, to be heard, and to be understood. These
          fundamental values hold the framework in how I work with the
          individual.
        </p>
        <p className="paragraph">
          I am a firm believer that people already have answers to their own
          questions. With your lead and collaboration, I will highlight your
          strengths, and mirror your innermost thoughts. The ‘magic’ happens
          when you give yourself the space to be curious about your past and
          present experiences while being equipped to explore different angles
          and perspectives to create new insight that encourages you to be your
          truest, most authentic self.
        </p>
      </div>

      <div className="image-section">
        <div className="image-wrapper">
          <img src={ProfileImage} alt="Cindy Shu" />
        </div>
      </div>
    </div>
        
    <div className="about-me-container2">
            <h1 className="about-me-heading">
                Professional Background <br /> and Qualifications
            </h1>

            <div className="about-me-grid">
                {/* Left Column */}
                <div className="education-experience">
                    <h2>EDUCATION AND WORK EXPERIENCE</h2>
                    <h3 className="highlight-title">Licensed Marriage and Family Therapist #101250</h3>

                    <h3 className="highlight-title">Richmond Area Multi-Services (RAMS):</h3>
                    <p>
                        CAAP Counseling and Pre-Vocational Services<br />
                        Provide mental health services to individuals who may be dealing with drug addictions, 
                        experiencing trauma, and homelessness. Link clients to community services and offer 
                        vocational counseling and assessment. Advocate and promote social justice for underserved populations.
                    </p>

                    <h3 className="highlight-title">Dominican University of California</h3>
                    <p>
                        M.S. in Counseling Psychology,<br />
                        Emphasis in Marriage and Family Therapy
                    </p>
                </div>

                {/* Right Column */}
                <div className="qualifications">
                    <div className="section">
                        <h3>TRAININGS</h3>
                        <p>Emotionally Focused Therapy Externship</p>
                    </div>

                    <div className="section">
                        <h3>PROFESSIONAL AFFILIATIONS</h3>
                        <p>California Association of Marriage and Family Therapists (CAMFT)</p>
                        <p>San Francisco Chapter (SFCAMFT)</p>
                        <p>SFCAMFT Diversity Chair 2021, 2022, 2023</p>
                    </div>

                    <div className="section">
                        <h3>LANGUAGES</h3>
                        <p>English</p>
                        <p>Mandarin, Chinese (Spoken)</p>
                    </div>
                </div>
            </div>
        </div>
            </>

    );
};

export default About;
