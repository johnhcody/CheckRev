import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const BusinessShowCard = props => {
    const star = <FontAwesomeIcon icon={['fas', 'star']} />
    return (
        <div className="bus-show-text">
            <h1>Dave's Diner</h1>
            <div>
                <div className="bus-show-rating">
                    <a>{star} {star} {star} {star} {star} </a> 
                    <h2>19 Reviews</h2>
                </div>
                <div className="bus-show-review">
                </div>
            </div>
            <h3>$$$</h3>
            <h4>10:00 AM - 7:00 PM</h4>
            <button> {star} Write a Review</button>
        </div>
    )
}

export default BusinessShowCard;
