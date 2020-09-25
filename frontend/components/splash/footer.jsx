import React from 'react';
import Copyright from './copyright';

function Footer() {
    return (
        <div className="footer-container">
        <div className="footer-list">
        <div className="list-1">
        <ul>
            <header>Languages</header>
            <li>Javascript</li>
            <li>Ruby</li>
            <li>Python</li>
            <li>CSS</li>
            <li>HTML</li>
        </ul>
        </div>
        <div className="list-1">
        <ul>
            <header>Contact</header>
            <li><a href="https://github.com/johnhcody">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/johnhcody/">LinkedIn</a></li>     
            <li>Email: john.haner.cody@gmail.com</li>
        </ul>
        </div>
        <div className="list-2">
        <ul>
            <header>Skills</header>
            <li>Commited</li>
            <li>Hard Working</li>
            <li>Positive</li>
        </ul>
        </div>
        </div>
        </div>
    )
}

export default Footer;