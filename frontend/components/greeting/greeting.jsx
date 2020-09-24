import React from 'react';
import { Link, Redirect } from 'react-router-dom';



class Greeting extends React.Component {
    constructor(props) {
        super(props)
        this.loginDemo = this.loginDemo.bind(this);
        this.state = {
            email: '',
            password: ''
        }
    }


    loginDemo() {
        const user = Object.assign({}, this.state);
        user['email'] = 'guest@guest.com';
        user['password'] = 'password';
        this.props.login(user);
        return <Redirect to={'/'} />
    }

    render() {
        const { currentUser, logout } = this.props;
        if (currentUser) {
            return (
                <div>
                    <p className="user greeting">Hello,  {currentUser.firstName}</p>
                    <button onClick={logout} className="logout greeting">Log Out</button>
                    <Link to='#' style={{ textDecoration: 'none', color: 'white' }}><button className="review greeting">Write a Review</button></Link>
                </div>
            )
        } else {
            return (
                <div>
                    <span className="span-button">
                        <Link to='/signup' style={{ textDecoration: 'none', color: 'white' }}><button className="signup greeting" color>Sign Up</button></Link>
                        <Link to='/login' style={{ textDecoration: 'none', color: 'white' }}><button className="login greeting">Log In</button></Link>
                        <button className="demo greeting" onClick={this.loginDemo}>Demo</button>
                        <Link to='#' style={{ textDecoration: 'none', color: 'white' }}><button className="review greeting">Write a Review</button></Link>
                    </span>
                </div>
            )
        }

    }
}

export default Greeting;