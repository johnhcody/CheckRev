import { connect } from 'react-redux';
import BusinessSearch from './business_search'

const mSTP = (state, ownProps) => {
    debugger
    return {
        history: ownProps.history
    }
}

const mDTP = dispatch => {
    return {

    }
}


export default connect(mSTP, null)(BusinessSearch);