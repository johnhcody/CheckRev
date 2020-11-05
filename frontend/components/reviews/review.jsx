import React from 'react';
import ReviewNav from './review_nav';
import ReviewForm from './create_review_form_container';


class Review extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ReviewNav />
                <ReviewForm />
            </div>
        )
    }
}

export default Review;