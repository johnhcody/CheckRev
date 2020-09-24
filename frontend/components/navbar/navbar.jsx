import React from 'react';
import { Link } from 'react-router-dom';



const NavBar = () => (
    <div className="navbar-parent">
        <ul>
            <Link to="/"><img className="navbar-logo" src={window.logo} /></Link>
        </ul>
    </div>
);

export default NavBar;
