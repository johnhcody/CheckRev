import React from 'react';


function SocialMedia() {
    return (
        <div className="social-media-wrapper">
            <div className="social-title">
                <h2>Find Me on Social Media</h2>
            </div>
            <div className="social-media-container-parent">
                <div className="social-media-container">
                    <div className="social-media-card">
                        <a href="#" >
                            <img src={window.github} />
                            <div className="media-container">
                                <h3>Github</h3>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="social-media-container">
                        <div className="social-media-card">
                    <a href="#" >
                            <img src={window.linkedin} />
                            <div className="media-container">
                                <h3>Linked In</h3>
                            </div>
                    </a>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default SocialMedia;