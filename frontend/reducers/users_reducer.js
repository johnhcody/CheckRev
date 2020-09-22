import { RECEIVE_CURRENT_USER } from '../actions/user_actions'


export default function usersReducer(state = {}, action) {
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState[action.user.id] = action.user;
            return newState; 
        default:
            return state;
    }
}