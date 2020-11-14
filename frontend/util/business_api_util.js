export const fetchBusinesses = (filters) => {
    console.log('filters');
    console.log(filters);
    return $.ajax({
        method: 'GET',
        url: '/api/businesses',
        data: filters
    })}


export const fetchBusiness = (businessId) => {
    return $.ajax({
        method: 'GET',
        url: `api/businesses/${businessId}`
    })
}