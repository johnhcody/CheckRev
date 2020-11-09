import { connect } from 'react-redux';
import SearchBar from './searchbar'
import updateFilters from '../../actions/filter_actions';

const mSTP = state => {
    return {
        businesses: Object.values(state.entities.businesses)
    }
}

const mDTP = dispatch => {
    return {
        updateFilters: (filter, value) => dispatch(updateFilters(filter, value))
    }
}


export default connect(null, null)(SearchBar);