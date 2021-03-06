import { connect } from 'react-redux';
import { fetchReview, fetchReviews } from '../../actions/review_actions';
import { deleteReview } from '../../actions/review_actions';
import { updateUser } from '../../actions/user_actions';
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
        deleteReview: (review) => dispatch(deleteReview(review)),
        updateUser: (user) => dispatch(updateUser(user))
    }
}


export default connect(mSTP, mDTP)(ReviewIndex);