import { RECEIVE_CURRENT_USER, RECEIVE_ALL_USERS } from '../actions/user_actions'


export default function usersReducer(state = {}, action) {
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_ALL_USERS:
            return action.users;
        case RECEIVE_CURRENT_USER:
            newState[action.currentUser.id] = action.currentUser;
            return newState; 
        default:
            return state;
    }
}