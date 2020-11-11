import { connect } from 'react-redux';
import { fetchBusinesses } from '../../actions/business_actions';
import BusinessIndex from './business_index';
import { updateFilters } from '../../actions/filter_actions';

const mSTP = state => {
    return {
        businesses: Object.values(state.entities.businesses)
    }
}

const mDTP = dispatch => {
 
    return {
        fetchBusinesses: () => dispatch(fetchBusinesses()),
        updateFilters: (filter, value) => dispatch(updateFilters(filter, value))
    }
}


export default connect(mSTP, mDTP)(BusinessIndex);