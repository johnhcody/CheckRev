import * as SessionApiUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

const receiveCurrentUser = currentUser => {
    debugger
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    }
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER,
    }
}

export const receiveErrors = errors => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }
}

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}

export const login = user => dispatch => {
    return SessionApiUtil.login(user).then(payload => (
        dispatch(receiveCurrentUser(payload))), 
        err => (dispatch(receiveErrors(err.responseJSON))))
};

export const logout = () => dispatch => {
    return SessionApiUtil.logout()
        .then(payload => dispatch(logoutCurrentUser(payload)))
};

export const signup = user => dispatch => {
    debugger
    return SessionApiUtil.findCityAndState(user.zipcode).then(payload => {
        debugger
        const completeUser = Object.assign(user, payload);
        SessionApiUtil.signup(completeUser);
        debugger
    }).then(secondPayload => {
        debugger
        console.log(secondPayload);
        dispatch(receiveCurrentUser(user)),
            err => (dispatch(receiveErrors(err.responseJSON)))
    })
};

// payload is what is sent back from json.  