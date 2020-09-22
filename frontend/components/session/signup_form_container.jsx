const mSTP = state => {
    return {
        errors: Object.values(state.errors),
        formType: 'signup'
    }
}

const mDTOP = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user))
    }
}