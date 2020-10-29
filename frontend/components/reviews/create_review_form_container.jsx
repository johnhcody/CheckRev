import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview } from '../../actions/review_actions';

const mSTP = state => {
    return {
        formType: 'Post Your Review'
    }
}

const mDTP = dispatch => {
    return {
        action: review => dispatch(createReview(review))
    }
}