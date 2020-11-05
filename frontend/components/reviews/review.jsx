import React from 'react';
import ReviewNav from './review_nav';
import ReviewForm from './create_review_form_container';
import Footer from '../splash/footer';
import Copyright from '../splash/copyright';

class Review extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ReviewNav />
                <ReviewForm />
                <Footer />
                <Copyright />
            </div>
        )
    }
}

export default Review;