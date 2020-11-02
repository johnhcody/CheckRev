import React from 'react';
import ReviewText from './review_text';
import ReviewProfile from './review_profile';

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    //renderProfile(review) {
      //  debugger
      //  return <ReviewProfile author={this.props.allUsers[review.authorId]} />
    //}

    render() {
        debugger
        if (typeof this.props.allUsers === 'undefined' || typeof this.props.reviews === 'undefined') {
            return null
        } else {
            return (
            <div>
            <div className="review-header">
                <header>Recent Reviews</header>
            </div>
            {
                this.props.reviews.map(review => {
                    //this.renderProfile(review)
                    return <ReviewText 
                    review={review}
                    key={review.id}
                    author={this.props.allUsers[review.author_id]}
                    />
                })
            }
            </div>
        )}
        
    }
}

export default ReviewIndex;