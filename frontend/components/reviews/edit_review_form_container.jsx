import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { fetchReview, updateReview } from '../../actions/review_actions';

const mSTP = (state, ownProps) => {
    const currentUser = state.entities.users[state.session.id]
    const review = state.entities.businesses[ownProps.match.params.businessId].reviews.filter(review => review.id == ownProps.match.params.reviewId)[0]
    return {
        review: review,
        formType: 'Edit Your Review',
        currentUser,
        allBusinesses: Object.values(state.entities.businesses),
        busId: ownProps.match.params.businessId,
        body: review.body,
        rating: review.rating.toString(),
        reviewId: ownProps.match.params.reviewId
    }
}

const mDTP = dispatch => {
    return {
        fetchReview: reviewId => dispatch(fetchReview(reviewId)),
        fetchBusiness: businessId => dispatch(fetchBusiness(businessId)),
        action: review => dispatch(updateReview(review))
    }
}

export default connect(mSTP, mDTP)(ReviewForm)