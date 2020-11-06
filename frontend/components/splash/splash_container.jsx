import { connect } from 'react-redux';
import Splash from './splash'

const mSTP = state => {
    const currentUser = state.entities.users[state.session.id]
    return {
    currentUser
    }
}

const mDTP = dispatch => {
    return {
        
    }
}


export default connect(mSTP, null)(Splash);