      import React from 'react';
      import { useNavigate } from "react-router-dom";

      import './Styles/style.css';



      const Home = () => {
          const navigate = useNavigate();

          const handleContactClick = () => {
            navigate("/Contact"); // Redirect to the Say Hello page
          };
          return (
        <>
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <h1>Welcome to Healing Spaces</h1>
              <p>Your Journey starts here.</p>
              <a href="#get-started" className="cta-text">
        Get Started
      </a>
      <hr/>
 
        </div>
        </section>
        <section>
        <div className="therapy-services-wrapper">

         <div className="therapy-header">

              <div className="text-content">
              <div className="vertical-line"></div>


              <h1>Our Work Together</h1>
                <p className="highlighted-text">
                I think of therapy as walking through tall bushes, having to clear the brush along the way. 
                Sometimes the path is clear, and we walk through easily. Other times we cannot see where we are going, and we have to push the bushes aside to clear a path.
                 I see myself as being there, beside you, holding down the tall grass as you set it aside, so you can see ahead.<br/>
                  In other instances, though the path looks clear; no bushes, no tall grass, it is littered with thorns, some so small we can barely see them, and yet they hurt so bad.
                   In those times, I will try my best to walk with you as you tread gingerly; fearfully picking your way through, having to face things that you may have kept hidden, but which have caused you much distress.<br/>
                    I will trust that you can find a way through, that you can harness your innate force towards growth even as I understand that it may not be easy or straightforward. 
                    I will be sensitive, empathic and accepting of you, even of those parts of you that may seem so terrible to you or to society.

                </p>
               
                <blockquote className="hero-quote">
        "The curious paradox in life is that when I accept myself as I truly am, 
        then I can begin to change."
        <span>- Carl Rogers</span>
      </blockquote>

                </div>
                
              </div>
              </div>
      </section>
              <section className="how-i-help">
                <div className="container">
                  <h2 className="section-title">OFFERED THERAPY SERVICES</h2>
                  <h3 className="section-subtitle">How I Can Help</h3>
          
                  <div className="therapy-cards">
                    {/* Individual Therapy Card */}
                    <div className="therapy-card">
                      <h4 className="therapy-title">Individual Therapy</h4>
                      <ul className="therapy-list">
                        <li>Depression</li>
                        <li>Anxiety</li>
                        <li>Relationship Challenges</li>
                        <li>Grief and Loss</li>
                        <li>Identity Issues</li>
                        <li>Cross-Cultural Issues</li>
                      </ul>
                      <a href="#individual-therapy" className="learn-more">
                        Learn More <span className="arrow">→</span>
                      </a>
                    </div>
          
                    {/* Couples Therapy Card */}
                    <div className="therapy-card">
                      <h4 className="therapy-title">Couples Therapy</h4>
                      <ul className="therapy-list">
                        <li>Communication Challenges</li>
                        <li>Physical and/or Emotional Intimacy</li>
                        <li>Infidelity</li>
                        <li>Navigating Life Transitions</li>
                        <li>Parenthood Related to Anxiety and Stress</li>
                      </ul>
                      <a href="#couples-therapy" className="learn-more">
                        Learn More <span className="arrow">→</span>
                      </a>
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
              </section>
              </>
            );
          };

      export default Home;
