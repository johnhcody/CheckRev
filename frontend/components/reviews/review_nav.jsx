import React from 'react';
import { Link } from 'react-router-dom';
import GreetingDropdown from '../greeting/greeting_container';


const ReviewNav = () => (
    <div className="review-navbar-parent">
        <Link to="/"><img src={window.logo} /></Link>
        <div className="review-greeting-wrapper">
            <GreetingDropdown />
        </div>
    </div>
);

export default ReviewNav;