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
                    author={this.props.allUsers[review.authorId]}
                    />
                })
            }
            </div>
        )
    }
}

export default ReviewIndex;