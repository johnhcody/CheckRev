import { fetchBusiness } from '../../actions/business_actions';
import BusinessShow from './business_show';
import { connect } from 'react-redux';


const mSTP = (state, ownProps) => {
    debugger
    return {
        business: state.entities.businesses[ownProps.match.params.businessId]
    }
};

const mDTP = dispatch => {
    return {
        fetchBusiness: businessId => dispatach(fetchBusiness(businessId))
    }
}

export default connect(mSTP, mDTP)(BusinessShow);