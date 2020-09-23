import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';


const sessionErrorsReducer = (state = {}, action) => {
    Object.freeze(state)
    debugger
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            debugger
            newState = [];
            return newState;
        case RECEIVE_ERRORS:
            debugger
            newState = action.errors;
            return newState;
        default:
            return state;
    }
}

export default sessionErrorsReducer;