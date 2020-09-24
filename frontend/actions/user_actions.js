export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

const receiveCurrentUser = (user) => {
    debugger
    return {
        type: RECEIVE_CURRENT_USER,
        user
    }
}

export default receiveCurrentUser;