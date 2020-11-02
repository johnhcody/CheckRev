import { connect } from 'react-redux';
import FeaturedBusinesses from './featured_businesses';

const mSTP = state => {
    return {
        businesses: Object.values(state.entities.businesses)
    }
}

const mDTP = dispatch => {
    return {
        fetchBusinesses: () => dispatch(fetchBusinesses())
    }
}


export default connect(mSTP, mDTP)(FeaturedBusinesses);