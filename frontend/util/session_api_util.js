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

export const findCityAndState = (zipcode) => {
    return $.ajax({
        method: 'GET',
        url: `http://ZiptasticAPI.com/${zipcode}`,
        dataType: 'json'
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
                birthdate: user.birthdate,
                errors: user.errors,
                city: user.city,
                state: user.state
            }
        }
    })
}

    // return $.ajax({
    //     method: 'GET',
    //     url: `http://ZiptasticAPI.com/${user.zipcode}`,
    //     dataType: 'json',
    //     success: function (result) {
    //         user =  Object.assign(user, result)
    //         debugger
    //     }

    // }).then($.ajax({
    //     method: "POST",
    //     url: "/api/users",
    //     data: {
    //         user: {
    //             first_name: user.firstName,
    //             last_name: user.lastName,
    //             email: user.email,
    //             password: user.password,
    //             zipcode: user.zipcode,
    //             birthdate: user.birthdate,
    //             state: user.state,
    //             city: user.city,
    //             errors: user.errors
    //         }
    //     }
    // }))
    // $.when(call1).done(function (response) {
    //     console.log(response);
    // })
    
    
    

    // fetch(`http://ZiptasticAPI.com/${user.zipcode}`)
    //     .then(response => response.json())
    //     .then(data => user['data'] = data)
    //     .then($.ajax({
    //         method: "POST",
    //         url: "/api/users",
    //         data: {
    //             user: {
    //                 id: user.id,
    //                 first_name: user.firstName,
    //                 last_name: user.lastName,
    //                 email: user.email,
    //                 password: user.password,
    //                 zipcode: user.zipcode,
    //                 birthdate: user.birthdate,
    //                 errors: user.errors,
    //                 state: user.data.state,
    //                 city: user.data.city.charAt(0) + user.data.city.slice(1).toLowerCase()
    //             }
    //         }
    //     }))
