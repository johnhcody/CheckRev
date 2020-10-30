import React from 'react';
import ReviewNav from './review_nav';

class Review extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ReviewNav />
            </div>
        )
    }
}

export default Review;