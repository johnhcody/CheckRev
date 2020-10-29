import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { fetchReview, updateReview } from '../../actions/review_actions';
import { fetchReviews } from '../../util/review_api_util';

const mSTP = (state, ownProps) => {
    return {
        review: state.reviews[ownProps.match.params.reviewId],
        formType: 'Edit Your Review'
    }
}

const mDTP = dispatch => {
    return {
        fetchReview: reviewId => dispatch(fetchReviews(reviewId)),
        action: review => dispatch(updateReview(review))
    }
}

export default connect(mSTP, mDTP)(ReviewForm)