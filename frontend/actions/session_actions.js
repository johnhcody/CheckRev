import * as ApiUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = user => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
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

export const login = user => dispatch => {
    return ApiUtil.login(user).then(payload => {
        dispatch(receiveCurrentUser(payload))
    })
}

export const logout = () => dispatch => {
    return ApiUtil.logout()
        .then(payload => dispatch(logoutCurrentUser(payload)))
};

export const signup = user => dispatch => {
    return ApiUtil.signup(user).then(payload => {
        dispatch(receiveCurrentUser(payload))
    })
};