import { connect } from 'react-redux';
import Greeting from './greeting'
import { logout } from '../../actions/session_actions'

const mSTP = (state) => {
    const currentUser = state.entities.users[state.session.id]
    // debugger
    return {
        currentUser,
    }
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(Greeting);