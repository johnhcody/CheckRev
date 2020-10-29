import { connect } from 'react-redux';
import { fetchReview, fetchReviews } from '../../actions/review_actions';
import { deleteReview } from '../../util/review_api_util';
import ReviewIndex from './review_index'

const mSTP = state => {

    return {
        businesses: Object.values(state.entities.businesses)
    }
}

const mDTP = dispatch => {
    return {
        fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
        fetchReviews: () => dispatch(fetchReviews()),
        deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
    }
}


export default connect(mSTP, mDTP)(ReviewIndex);