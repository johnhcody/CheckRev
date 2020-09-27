import { connect } from 'react-redux';
import { fetchBusiness } from '../../util/business_api_util';
import BusinessIndex from './business_index'

const mSTP = state => {
    //debugger
    return {
        businesses: Object.values(state.businesses)
    }
}

const mDTP = dispatch => {
    //debugger
    return {
        fetchBusinesses: () => dispatch(fetchBusiness())
    }
}


export default connect(mSTP, mDTP)(BusinessIndex);