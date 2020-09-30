import { connect } from 'react-redux';
import Greeting from './greeting'
import { login, logout } from '../../actions/session_actions'

const mSTP = (state) => {
    const currentUser = state.entities.users[state.session.id]
    return {
        currentUser,
    }
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user))
});

export default connect(mSTP, mDTP)(Greeting);