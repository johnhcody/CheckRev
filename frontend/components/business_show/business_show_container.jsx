import { fetchBusiness } from '../../actions/business_actions';
import { fetchReviews } from '../../actions/review_actions';
import { fetchUsers } from '../../actions/user_actions';
import BusinessShow from './business_show';
import { connect } from 'react-redux';


const mSTP = (state, ownProps) => {
    return {
        business: state.entities.businesses[ownProps.match.params.businessId],
        allUsers: state.entities.users,
        reviews: typeof state.entities.businesses[ownProps.match.params.businessId] === 'undefined' ? [] : Object.values(state.entities.businesses[ownProps.match.params.businessId].reviews)
    }
};

const mDTP = dispatch => {
    return {
        fetchBusiness: businessId => dispatch(fetchBusiness(businessId)),
        fetchReviews: () => dispatch(fetchReviews()),
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mSTP, mDTP)(BusinessShow);