import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import businessesReducer from './businesses_reducer';
import reviewsReducer from './reviews_reducers';

const entitiesReducer = combineReducers({
    users: usersReducer,
    businesses: businessesReducer, 
    reviews: reviewsReducer
});

export default entitiesReducer;