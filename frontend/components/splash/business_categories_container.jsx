import { connect } from 'react-redux';
import BusinessCategories from './business_categories';
import { updateFilters } from '../../actions/filter_actions';

const mSTP = (state, ownProps) => {
    debugger
    return {
        businesses: state.entities.businesses
    }
}

const mDTP = dispatch => {
    return {
        updateFilters: (filterObj) => dispatch(updateFilters(filterObj))
    }
}


export default connect(mSTP, mDTP)(BusinessCategories);