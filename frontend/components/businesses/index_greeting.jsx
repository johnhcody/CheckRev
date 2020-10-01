import React from 'react';
import { Link} from 'react-router-dom';
import GreetingDropdown from '../greeting/greeting_dropdown';


class IndexGreeting extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        if (this.props.currentUser) {
            return (
                <div>
                    <div className="span-button">
                        <div className="review-link">
                            <Link to='#'><button>Write a Review</button></Link>
                        </div>
                        <div className="idx-logout">
                            <GreetingDropdown logout={this.props.logout} currentUser={this.props.currentUser} />
                        </div>
                    </div>
                </div>
            )
        } else {

        return (
            <div className="bus-greeting-buttons">
                <button className="bus-review">Write a Review</button>
                <Link to='/login'><button className="bus-login">Log In</button></Link>
                <Link to='/signup'><button className="bus-signup">Sign Up</button></Link>
            </div>
        )
        }
    }
}


export default IndexGreeting;