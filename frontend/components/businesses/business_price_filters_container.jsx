import { connect } from 'react-redux';
import PriceFilters from './business_price_filters';

const mSTP = state => {
    debugger
    return {
        btnColor: 'red'
    }
}

const mDTP = dispatch => {
    return {

    }
}


export default connect(null, null)(PriceFilters);