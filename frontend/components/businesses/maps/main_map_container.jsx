import { connect } from 'react-redux';
import MainMap from './main_map';

const mSTP = state => {
    debugger
    return {
        businesses: Object.values(state.entities.businesses)
    }
}

const mDTP = dispatch => {
    return {

    }
}


export default connect(mSTP, null)(MainMap);