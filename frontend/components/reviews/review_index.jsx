import React from 'react';
import ReviewText from './review_text';

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    //renderProfile(review) {
      //  debugger
      //  return <ReviewProfile author={this.props.allUsers[review.authorId]} />
    //}

    sortReviews(reviews) {
        if (reviews[this.props.reviews.length - 1].created_at > reviews[0].created_at) {
            return this.props.reviews.reverse();
        } else {
            return this.props.reviews;
        }
    }

    render() {
        if (typeof this.props.allUsers === 'undefined' || typeof this.props.reviews === 'undefined') {
            return null
        } else if (this.props.reviews.length === 0){
            return (<div className="review-header">
                <header>No Reviews Yet</header>
            </div>)
            }
            else {
                let sortedReviews = this.sortReviews(this.props.reviews)
                return (
                <div>
                <div className="review-header">
                    <header>Recent Reviews</header>
                </div>
                {   
                    sortedReviews.map(review => {
                        //this.renderProfile(review)
                        return <ReviewText 
                        review={review}
                        key={review.id}
                        author={this.props.allUsers[review.author_id]}
                        currentUser={this.props.currentUser}
                        business={this.props.business}
                        />
                    })
                }
                </div>
            )
        }

        
    }
}

export default ReviewIndex;