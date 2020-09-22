import React from 'react';
import { Link } from 'react-router-dom';


class Greeting extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { currentUser, logout} = this.props;
        debugger
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
                    <Link to='/login'>Log In</Link>
                    <Link to='/signup'>Sign Up</Link>
                </div>
            )
        }

    }
}

export default Greeting;