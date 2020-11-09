import { fetchBusinesses } from './business_actions'

export const UPDATE_FILTER = 'UPDATE_FILTER';

export const changeFilter = (filter, value) => ({
    type: UPDATE_FILTER,
    filter,
    value
});

export const updateFilters = (filter, value) => (dispatch, getState) => {
    debugger
    dispatch(changeFilter(filter, value));
    return fetchBusinesses(getState().ui.filters)(dispatch);
};