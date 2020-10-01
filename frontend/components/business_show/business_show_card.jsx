import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const BusinessShowCard = props => {
    const star = <FontAwesomeIcon icon={['fas', 'star']} />
    return (
        <div className="bus-show-text">
            <h1>Dave's Diner</h1>
            <h2>{star} {star} {star} {star} {star} </h2>
            <h3>$$$</h3>
            <h4>10:00 AM - 7:00 PM</h4>
        </div>
    )
}

export default BusinessShowCard;
