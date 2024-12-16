    import React from 'react';
    import './Styles/style.css';

    import TherapyImage from '../Images/nature5.jpg';


    const Home = () => {
        return (
            <div className="homepage">
                <div className="content-container">
                    {/* Text Section */}
                    <div className="text-section">
                        <p>
                        I think of therapy as walking through tall bushes, having to clear the brush along the way. 
                        Sometimes the path is clear, and we walk through easily. Other times we cannot see where we are going, 
                        and we have to push the bushes aside to clear a path. I see myself as being there, 
                        beside you holding down the tall grass as you set it aside, so you can see ahead. 
                        In other instances, though the path looks clear; no bushes, no tall grass, it is littered with thorns, 
                        some so small we can barely see them, and yet they hurt so bad. In those times, 
                        I will try my best to walk with you as you tread gingerly; fearfully picking your way through, 
                        having to face things that you may have kept hidden, but which have caused you much distress. 
                    


                        </p>

                <p className="quote-text">
                    "The curious paradox in life is that when I accept myself as I truly am, 
                    then I can begin to change."
                </p>
                <p className="quote-author">- Carl Rogers</p>
                <div className="cta-text">

                            <p>Let's Get Started</p>
                            <hr className="cta-hr" />
                        </div>
                    </div>
                    Image Section 
                    <div className="image-section">
                        <div className="image-wrapper">
                            <img
                                src={TherapyImage}// Replace with actual image URL
                                alt="Therapy illustration"
                            />
                        </div>
                    </div>
                
                </div>
                
            </div>
            
        );
    };

    export default Home;
