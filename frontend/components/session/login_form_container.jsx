import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions'

const mSTP = state => {
    return {
        errors: Object.values(state),
        formType: 'login',
        formText: 'Log In',
        linkTarget: '/signup',
        linkText: 'Sign Up'
    }
}

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(login(user))
    }
}


export default connect(mSTP, mDTP)(SessionForm);