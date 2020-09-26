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
                            <div className="media-container">
                        <h3>Github</h3>
                            </div>
                            <img src={window.github} />
                        </a>
                    </div>
                </div>
                <div className="social-media-container">
                        <div className="social-media-card">
                    <a href="#" >
                            <div className="media-container">
                                <h3>LinkedIn</h3>
                            </div>
                            <img src={window.linkedin} />
                    </a>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default SocialMedia;