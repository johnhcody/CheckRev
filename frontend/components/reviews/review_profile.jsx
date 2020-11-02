import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ReviewProfile(props) {
    const user = <FontAwesomeIcon icon="user" />
    debugger
    return (
        <div className="review-user-wrapper">
            <div className="user-img">
                <a>{user}</a>
            </div>
            <div className="user-prof">
                <h1>Guest User</h1>
                <h2>Boston, MA</h2>
                <h3>200 Reviews</h3>
            </div>
            
        </div>
    )
}

export default ReviewProfile;