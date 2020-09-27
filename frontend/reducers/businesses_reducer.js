import { RECEIVE_BUSINESS, RECEIVE_BUSINESSES } from "../actions/business_actions";

const businessesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    debugger
    switch (action.type) {
        case RECEIVE_BUSINESSES:
            debugger
            return action.businesses;
        case RECEIVE_BUSINESS:
            debugger
            newState[action.business.id] = action.business;
            return newState;
        default:
            return state;
    }
};

export default businessesReducer;