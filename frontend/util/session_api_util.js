export const login = (user) => {
    return $.ajax({
        method: "POST",
        url: "/api/session",
        data: { user }
    })
}

export const logout = () => {
    return $.ajax({
        method: "DELETE",
        url: "/api/session",
    })
}

export const signup = (user) => {
    debugger
    return $.ajax({
        method: "POST",
        url: "/api/users",
        data: { 
            user: {
                id: user.id,
                first_name: user.firstName,
                last_name: user.lastName,
                email: user.email,
                password: user.password,
                zipcode: user.zipcode,
                birthdate: user.birthdate
            }
         }
    })
}