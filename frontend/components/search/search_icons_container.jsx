import { connect } from 'react-redux';
import SearchIcons from './searchbar'

const mSTP = state => {
    return {
        businesses: state.entities.businesses
    }
}

const mDTP = dispatch => {
    return {

    }
}


export default connect(mSTP, null)(SearchIcons);