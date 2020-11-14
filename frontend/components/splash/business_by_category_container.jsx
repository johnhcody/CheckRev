import { connect } from 'react-redux';
import BusinessByCategory from './business_by_category';

const mSTP = state => {

    return {
        businesses: state.entities.businesses
    }
}

const mDTP = dispatch => {
    return {

    }
}


export default connect(mSTP, null)(BusinessByCategory);