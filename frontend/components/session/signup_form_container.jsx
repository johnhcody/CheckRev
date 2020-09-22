import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions'

const mSTP = state => {
    return {
        errors: Object.values(state),
        formType: 'signup',
        formText: 'Sign Up',
        linkTarget: '/login',
        linkText: 'Log In'
    }
}

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user))
    }
}


export default connect(mSTP, mDTP)(SessionForm);