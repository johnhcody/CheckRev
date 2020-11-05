import React from 'react';
import { Link, Redirect} from 'react-router-dom';
import GreetingDropdown from '../greeting/greeting_dropdown';


class IndexGreeting extends React.Component {
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
        return <Redirect to={'/search'} />
    }

    render() {

        if (this.props.currentUser) {
            return (
                <div>
                    <div className="span-button">
                        {/* <div className="review-link">
                            <Link to='#'><button>Write a Review</button></Link>
                        </div> */}
                        <div className="idx-logout">
                            <GreetingDropdown logout={this.props.logout} currentUser={this.props.currentUser} />
                        </div>
                    </div>
                </div>
            )
        } else {

        return (
            <div className="bus-greeting-buttons">
                {/* <button className="bus-review">Write a Review</button> */}
                <button className="bus-demo" onClick={this.loginDemo}>Demo</button>
                <Link to='/login'><button className="bus-login">Log In</button></Link>
                <Link to='/signup'><button className="bus-signup">Sign Up</button></Link>
            </div>
        )
        }
    }
}


export default IndexGreeting;