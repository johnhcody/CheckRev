import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class BusinessReviewCards extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const { business } = this.props;
        const utensils = <FontAwesomeIcon icon="utensils" />
        return (
            <div className="featured-bus-card">
                <div>
                    <img src={window.construction} />
                    <a href="#" >
                    <h1>{business.name}</h1>
                    <h2>{utensils}{utensils}{utensils} {business.totalReviews} reviews</h2>
                    <h3>{business.type}</h3>
                    <h3>{business.location}</h3>
                    <h4>{business.amenities}</h4>
                </a>
                </div>
            </div>
        )
    }
}

export default BusinessReviewCards;