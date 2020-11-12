import { fetchBusinesses } from './business_actions'

export const UPDATE_FILTER = 'UPDATE_FILTER';

export const changeFilter = (filterObj) => {
    debugger
    return {
    type: UPDATE_FILTER,
    filterObj
    }
};

export const updateFilters = (filterObj) => (dispatch, getState) => {
    debugger
    dispatch(changeFilter(filterObj));
    return fetchBusinesses(getState().ui.filters)(dispatch);
};