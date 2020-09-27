import React from 'react';


function SocialMedia() {
    return (
        <div className="social-media-wrapper">
            <div className="social-title">
                <h2>Find Me on Social Media</h2>
            </div>
            <div className="social-media-container-parent">
                <div className="social-media-container">
                    <a href="https://github.com/johnhcody">
                    <div className="social-media-card">
                            <div className="media-container">
                        <h3>Github</h3>
                            </div>
                            <img src={window.github} />
                    </div>
                    </a>
                </div>
                <div className="social-media-container">
                    <a href="https://www.linkedin.com/in/johnhcody/">
                        <div className="social-media-card">
                            <div className="media-container">
                                <h3>LinkedIn</h3>
                            </div>
                            <img src={window.linkedin} />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SocialMedia;