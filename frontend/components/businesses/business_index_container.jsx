import { connect } from 'react-redux';
import { fetchBusinesses } from '../../actions/business_actions';
import BusinessIndex from './business_index';
import { updateFilters } from '../../actions/filter_actions';

const mSTP = (state, ownProps) => {
    return {
        businesses: Object.values(state.entities.businesses),
        history: ownProps.history
    }
}

const mDTP = dispatch => {
    debugger
    return {
        fetchBusinesses: () => dispatch(fetchBusinesses()),
        updateFilters: (filterObj) => dispatch(updateFilters(filterObj))
    }
}


export default connect(mSTP, mDTP)(BusinessIndex);