import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';



const BusinessShowCard = props => {
    const star = <FontAwesomeIcon icon={['fas', 'star']} />
    debugger
    return (
        <div className="bus-show-text">
            <h1>{props.name}</h1>
            <div>
                <div className="bus-show-rating">
                    <a>{star} {star} {star} {star} {star} </a> 
                    <h2>{props.reviews.length.toString()} Reviews</h2>
                </div>
                <div className="bus-show-review">
                </div>
            </div>
            <h3>$$$</h3>
            <h4>10:00 AM - 7:00 PM</h4>
            <Link to={`/businesses/${props.id}/review-new`}><button> {star} Write a Review</button></Link> 
        </div>
    )
}

export default BusinessShowCard;
