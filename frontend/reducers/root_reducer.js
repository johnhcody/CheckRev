import { combineReducers } from 'redux';
import sessionReducer from './session_reducer'


const rootReducer = combineReducers({
    sessions: sessionReducer,
})

export default rootReducer;