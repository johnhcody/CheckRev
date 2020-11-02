import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReviewProfile from './review_profile';
import { formatDate } from '../../util/date_utils';

function ReviewText(props) {
    debugger
    
    function renderRating(rating) {
        const star = <FontAwesomeIcon icon={['fas', 'star']} />
        switch(rating) {
            case 1:
                return <a>{star}</a> 
            case 2:
                return <a>{star} {star}</a>
            case 3:
                return <a>{star} {star} {star}</a>
            case 4:
                return <a>{star} {star} {star} {star}</a>
            case 5:
                return <a>{star} {star} {star} {star} {star}</a>
            default:
                break;
        }
    }

    return (
    <div className="review-text-and-profile-wrapper">
        <ReviewProfile author={props.author}/>
        <div className="review-text-wrapper">
            <div className="review-text-header">
                {renderRating(props.review.rating)}
                <h2>{formatDate(props.review.created_at)}</h2>
            </div>
            <p>{props.review.body}</p>
        </div>
    </div>
    )
}

export default ReviewText;