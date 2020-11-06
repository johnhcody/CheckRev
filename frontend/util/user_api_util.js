export const fetchUsers = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/users'
    })
}

export const updateUser = (user) => {
    return $.ajax({
        method: 'PATCH',
        upl: `api/users/${user.id}`,
        data: {
            user: {
                id: user.id,
                state: user.state,
                city: user.city
            }
        }
    })
}