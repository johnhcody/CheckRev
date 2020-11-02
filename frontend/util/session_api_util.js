export const login = (user) => {
    return $.ajax({
        method: "POST",
        url: "/api/session",
        data: {
            user: {
                email: user.email,
                password: user.password,
                errors: user.errors
            }
        }
    })
}

export const logout = () => {
    return $.ajax({
        method: "DELETE",
        url: "/api/session",
    })
}

export const signup = (user) => {
    fetch(`http://ZiptasticAPI.com/${user.zipcode}`)
        .then(response => response.json())
        .then(data => user['data'] = data);

        console.log('user')
        console.log(user)
        console.log('data')
        console.log(data)

    setTimeout( () => $.ajax({
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
                birthdate: user.birthdate,
                errors: user.errors,
                state: user.data.state,
                city: user.data.city.charAt(0) + user.data.city.slice(1).toLowerCase()
            }
         }
    }), 2000);
    
}