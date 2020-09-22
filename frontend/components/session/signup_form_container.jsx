import { connect } from 'react-redux';
import SessionForm from './signup_form';
import { signup } from '../../actions/session_actions'

const mSTP = state => {
    return {
        errors: Object.values(state),
        formType: 'signup',
        formText: 'Sign Up',
        user: {
            firstName: 'First Name',
            lastName: 'Last Name',
            email: 'Email',
            password: 'Password',
            zipcode: 'Zip Code',
            birthdate: 'birthday goes here'
        }
    }
}

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user))
    }
}


export default connect(mSTP, mDTP)(SessionForm);