export const fetchBusinesses = () => {
    debugger
    return $.ajax({
        method: 'GET',
        url: '/api/businesses',
    })}


export const fetchBusiness = (businessId) => {
    return $.ajax({
        method: 'GET',
        url: `api/businesses/${businessId}`
    })
}