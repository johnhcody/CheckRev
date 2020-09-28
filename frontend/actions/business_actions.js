import * as BusinessUtil from '../util/business_api_util';

export const RECEIVE_BUSINESSES = 'RECEIVE_BUSINESSES';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';


export const receiveBusinesses = (businesses) => {
    return {
        type: RECEIVE_BUSINESSES,
        businesses
    }
};


export const fetchBusinesses = () => dispatch => {
    return BusinessUtil.fetchBusinesses().then(businesses => {

        return dispatch(receiveBusinesses(businesses))
        
    })
}

