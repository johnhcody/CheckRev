import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const BusinessHours = props => {
    return (
        <div className="bus-hours-info">
            <ul>
                <header>Mon</header>
                <header>Tue</header>
                <header>Wed</header>
                <header>Thur</header>
                <header>Fri</header>
                <header>Sat</header>
                <header>Sun</header>
            </ul>
            <ul>
                <li>10:00 am - 7:00 pm</li>
                <li>10:00 am - 7:00 pm</li>
                <li>10:00 am - 7:00 pm</li>
                <li>10:00 am - 7:00 pm</li>
                <li>10:00 am - 7:00 pm</li>
                <li>10:00 am - 7:00 pm</li>
                <li>10:00 am - 7:00 pm</li>
            </ul>
            
        </div>
    )
}

export default BusinessHours;