import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';


const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state)
    let newState = state.slice();
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState = [];
            return newState;
        case RECEIVE_ERRORS:
            newState.concat(action.errors);
            return newState;
        default:
            return state;
    }
}

export default sessionErrorsReducer;