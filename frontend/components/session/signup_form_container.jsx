import { connect } from 'react-redux';
import SessionForm from './signup_form';
import { signup, clearErrors } from '../../actions/session_actions'

const mSTP = state => {
    return {
        errors: state.errors.session,
        user: {
            firstName: '',
            lastName: '',
            email: '',  
            password: '',
            zipcode: '',
            birthdate: '',
            city: '',
            state: ''
        },
        empty: '',
    }
}

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)), 
        clearErrors: () => dispatch(clearErrors())
    }
}


export default connect(mSTP, mDTP)(SessionForm);