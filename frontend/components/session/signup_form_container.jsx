import { connect } from 'react-redux';
import SessionForm from './signup_form';
import { signup } from '../../actions/session_actions'

const mSTP = state => {
    debugger
    return {
        errors: Object.values(state.errors),
        formType: 'signup',
        formText: 'Sign Up',
        user: {
            firstName: 'First Name',
            lastName: 'Last Name',
            email: 'Email',
            password: 'Password',
            zipcode: 'Zip Code',
            birthdate: 'birthday goes here'
        },
        empty: ''
    }
}

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user))
    }
}


export default connect(mSTP, mDTP)(SessionForm);