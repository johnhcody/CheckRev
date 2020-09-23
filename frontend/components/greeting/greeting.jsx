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
                    <span className="span-button">
                        <button className="signup login-signup" color><Link to='/signup' style={{ textDecoration: 'none', color: 'white' }}>Sign Up</Link></button>
                        <button className="login login-signup"><Link to='/login' style={{ textDecoration: 'none', color: 'white' }}>Log In</Link></button>
                    </span>
                </div>
            )
        }

    }
}

export default Greeting;