import { connect } from 'react-redux';
import { fetchBusinesses } from '../../util/business_api_util';
import BusinessIndex from './business_index'

const mSTP = state => {
    debugger
    return {
        businesses: Object.values(state.entities.businesses)
    }
}

const mDTP = dispatch => {
    debugger
    return {
        fetchBusinesses: () => dispatch(fetchBusinesses())
    }
}


export default connect(mSTP, mDTP)(BusinessIndex);