import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview } from '../../actions/review_actions';
import { fetchBusiness, fetchBusinesses } from '../../actions/business_actions';

const mSTP = (state, ownProps) => {
    const locArr = window.location.href.split('/');
    const strId = locArr[locArr.length - 2];
    const busId = parseInt(strId);
    debugger
    return {
        formType: 'Write a Review',
        allBusinesses: state.entities.businesses,
        body: ''
    }
}

const mDTP = dispatch => {
    return {
        action: review => dispatch(createReview(review)),
        fetchBusinesses: () => dispatch(fetchBusiness())
    }
}

export default connect(mSTP, mDTP)(ReviewForm)