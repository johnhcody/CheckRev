export const fetchBusinesses = (filters) => {
    debugger
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