import React from 'react';
import { Link, Redirect } from 'react-router-dom';


class Greeting extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { currentUser, logout} = this.props;
        // debugger
        if (currentUser) {
            return(
                <div>
                    <p>Hello, {currentUser.firstName}</p>
                    <button onClick={logout}>Log Out</button>
                </div>
            )
        } else {
            return(
                <div>
                    <button className="signup login-signup"><Link to='/signup'>Sign Up</Link></button>
                    <button className="login login-signup"><Link to='/login'>Log In</Link></button>
                </div>
            )
        }

    }
}

export default Greeting;