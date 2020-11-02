import * as UserApiUtil from '../util/user_api_util';


export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

const receiveCurrentUser = (user) => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    }
}

const receiveAllUsers = (users) => {
    return {
        type: RECEIVE_ALL_USERS,
        users
    }
}

// export default receiveCurrentUser;

export const fetchUsers = () => dispatch => {
    return UserApiUtil.fetchUsers().then(users => {
        return dispatch(receiveAllUsers(users))
    })
}