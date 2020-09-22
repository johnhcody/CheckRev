import { connect } from 'react-redux';
import Greeting from './greeting'
import { logout } from '../actions/session_actions'

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.sessions.id]
    }
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(Greeting);