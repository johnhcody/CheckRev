import { connect } from 'react-redux';
import { fetchReview, fetchReviews } from '../../actions/review_actions';
import { deleteReview } from '../../actions/review_actions';
import ReviewIndex from './review_index'

const mSTP = state => {

    return {
        businesses: Object.values(state.entities.businesses)
    }
}

const mDTP = dispatch => {
    debugger
    return {
        fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
        fetchReviews: () => dispatch(fetchReviews()),
        deleteReview: (review) => dispatch(deleteReview(review))
    }
}


export default connect(mSTP, mDTP)(ReviewIndex);