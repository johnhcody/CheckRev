import { connect } from 'react-redux';
import { fetchBusinesses } from '../../actions/business_actions';
import Splash from './splash'

const mSTP = state => {
    const currentUser = state.entities.users[state.session.id]
    return {
    currentUser,
    businesses: Object.values(state.entities.businesses)
    }
}

const mDTP = dispatch => {
    return {
        fetchBusinesses: (filterObj) => dispatch(fetchBusinesses(filterObj))
    }
}


export default connect(mSTP, mDTP)(Splash);