import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class BusinessShowCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display: "none"
        };
        this.checkCurrentUser = this.checkCurrentUser.bind(this);
        this.renderAverageRating = this.renderAverageRating.bind(this);
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

    renderAverageRating() {
        const len = this.props.reviews.length;
        let total = 0;
        this.props.reviews.forEach(review => {
            total += review.rating;
        })
        const halfStar = window.halfStar;
        const fullStar = window.fullStar;
        const avg = (total / len).toFixed(1)

        if (avg > 0 && avg < 1) {
            return <img src={halfStar}/>
        } else if (avg >= 1 && avg <= 1.4) {
            return <img src={fullStar} />
        } else if (avg >= 1.5 && avg < 2) {
            return <div><img src={fullStar} /> <img src={halfStar}/></div> 
        } else if (avg >= 2 && avg <= 2.4 ) {
            return <div><img src={fullStar} /> <img src={fullStar} /></div>
        } else if (avg >= 2.5 && avg < 3 ) {
            return <div><img src={fullStar} /> <img src={fullStar} /> <img src={halfStar} /></div>
        } else if (avg >= 3 && avg <= 3.4 ) {
            return <div><img src={fullStar} /> <img src={fullStar} /> <img src={fullStar} /></div>
        } else if (avg >= 3.5 && avg < 4 ) {
            return <div><img src={fullStar} /> <img src={fullStar} /> <img src={fullStar} /> <img src={halfStar} /></div>
        } else if (avg >= 4 && avg <= 4.4 ) {
            return <div><img src={fullStar} /> <img src={fullStar} /> <img src={fullStar} /> <img src={fullStar} /></div>
        } else if (avg > 4.4 && avg <= 4.6 ) {
            return <div><img src={fullStar} /> <img src={fullStar} /> <img src={fullStar} /> <img src={fullStar} /> <img src={halfStar} /></div>
        } else if (avg > 4.6) {
            return <div><img src={fullStar} /> <img src={fullStar} /> <img src={fullStar} /> <img src={fullStar} /> <img src={fullStar} /></div>
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
                            {this.renderAverageRating()} 
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
