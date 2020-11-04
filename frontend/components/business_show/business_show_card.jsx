import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class BusinessShowCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display: "none"
        };
        this.checkCurrentUser = this.checkCurrentUser.bind(this);
    }
    
    checkCurrentUser (e) {
        debugger
        if (typeof this.props.currentUser === 'undefined') {
            this.setState({ display: "block" })
        } else {
            debugger
            this.props.history.push(`/businesses/${this.props.id}/review-new`)
            //return <Redirect to={`/businesses/${this.props.id}/review-new`} />
        }
    }
    
    render() {
        debugger
        const star = <FontAwesomeIcon icon={['fas', 'star']} />
        const style = this.state
        if (!this.props) {
            return null;
        } else {
            return (
                <div className="bus-show-text">
                    <h1>{this.props.name}</h1>
                    <div>
                        <div className="bus-show-rating">
                            <a>{star} {star} {star} {star} {star} </a> 
                            <h2>{this.props.reviews.length.toString()} Reviews</h2>
                        </div>
                        <div className="bus-show-review">
                        </div>
                    </div>
                    <h3>$$$</h3>
                    <h4>10:00 AM - 7:00 PM</h4>
                    <button onClick={this.checkCurrentUser}> {star} Write a Review</button>
                    <p style={style}>You must be logged in!  You can sign in as a demo user above</p> 
                </div>
            )
        }
    }
}


export default BusinessShowCard;
