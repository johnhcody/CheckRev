import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import GreetingDropdown from './greeting_dropdown';



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
        user['email'] = 'danny@devito.com';
        user['password'] = 'password';
        this.props.login(user);
        return <Redirect to={'/'} />
    }

    render() {
        const { currentUser, logout } = this.props;
        if (currentUser) {
            return (
                <div>
                    <div className="span-button">
                        <div className="review-link">
                            <Link to='#'><button>Write a Review</button></Link>
                        </div>
                    <div className="session-link"></div>
                        <button id="guest">Hello,  {currentUser.firstName}</button>
                        <div className="logout">
                        <button onClick={logout} >Log Out</button>
                        <GreetingDropdown logout={this.props.logout}/>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div >
                    <div className="span-button">
                        <div className="review-link">
                        <Link to='#' ><button>Write a Review</button></Link>
                        </div>
                        <div className="session-link">
                        <button onClick={this.loginDemo}>Demo</button>
                        <Link to='/login'><button>Log In</button></Link>
                        <Link to='/signup'><button id="sign-up">Sign Up</button></Link>
                        </div>
                    </div>
                </div>
            )
        }

    }
}

export default Greeting;