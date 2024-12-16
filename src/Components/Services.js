    import React from "react";
    import "./Styles/Services.css";

    const Services = () => {
        return (
            <div className="therapy-services-wrapper">
              {/* Section: Header */}

              <div className="therapy-header">

              <div className="text-content">
              <div className="vertical-line"></div>


              <h1>What I Offer</h1>
              <h1>Therapy Services</h1>
                <p className="highlighted-text">

                  Individuals. <br /> Couples. <br /> Families.
                </p>
                <a href="#learn-more" className="learn-more">Learn More
                <hr/>
                </a>
                
              </div>
              </div>
        
              {/* Section: Text and Image Side by Side */}
        

          {/* Individual Therapy Section */}
          <div className="individual-therapy-box">
          <h2>INDIVIDUAL THERAPY</h2>
          <p>
            Provide individuals with the space to explore emotions and personal experiences in order to 
            create healthier coping skills to handle daily life stressors and develop tools to maintain 
            positive relationships and engage in a thriving community.
          </p>
          
        </div>
        <div className="individual-therapy-box">
          <h2>INDIVIDUAL THERAPY</h2>
          <p>
            Provide individuals with the space to explore emotions and personal experiences in order to 
            create healthier coping skills to handle daily life stressors and develop tools to maintain 
            positive relationships and engage in a thriving community.
          </p>
          
        </div>
        <div className="individual-therapy-box">
          <h2>INDIVIDUAL THERAPY</h2>
          <p>
            Provide individuals with the space to explore emotions and personal experiences in order to 
            create healthier coping skills to handle daily life stressors and develop tools to maintain 
            positive relationships and engage in a thriving community.
          </p>
          
        </div>
        <div className="individual-therapy-box">
          <h2>INDIVIDUAL THERAPY</h2>
          <p>
            Provide individuals with the space to explore emotions and personal experiences in order to 
            create healthier coping skills to handle daily life stressors and develop tools to maintain 
            positive relationships and engage in a thriving community.
          </p>
          
        </div>
        </div>
          );
        };

    export default Services;
