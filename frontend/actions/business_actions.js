import * as BusinessUtil from '../util/business_api_util';

export const RECEIVE_BUSINESSES = 'RECEIVE_BUSINESSES';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';


export const receiveBusinesses = (businesses) => {
    debugger
    return {
        type: RECEIVE_BUSINESSES,
        businesses
    }
};


export const receiveBusiness = (business) => {
    return {
        type: RECEIVE_BUSINESS,
        business
    }
};

export const fetchBusinesses = () => dispatch => {
    debugger
    return BusinessUtil.fetchBusinesses().then(businesses => dispatch(receiveBusinesses(businesses)))
}

export const fetchBusiness = (business) => dispatch => {
    return BusinessUtil.fetchBusiness(business).then(business => dispatch(receiveBusiness(business)))
}
