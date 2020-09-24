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
                    <Link to='#' style={{ textDecoration: 'none', color: 'white' }}><button className="review greeting">Write a Review</button></Link>
                </div>
            )
        } else {
            return(
                <div>
                    <span className="span-button">
                        <Link to='/signup' style={{ textDecoration: 'none', color: 'white' }}><button className="signup greeting" color>Sign Up</button></Link>
                        <Link to='/login' style={{ textDecoration: 'none', color: 'white' }}><button className="login greeting">Log In</button></Link>
                        <Link to='#' style={{ textDecoration: 'none', color: 'white' }}><button className="review greeting">Write a Review</button></Link>
                    </span>
                </div>
            )
        }

    }
}

export default Greeting;