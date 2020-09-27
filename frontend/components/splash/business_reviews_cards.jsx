import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class BusinessReviewCards extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        //debugger
        const { name, totalReviews, type, location, amenities } = this.props.business
        const utensils = <FontAwesomeIcon icon="utensils" />
        return (
            <div className="featured-bus-card">
                <a href="#" >
                    <img src={window.construction} />
                </a>
                <div>
                    <h1><a href="#">{name}</a></h1>
                    <h2>{utensils}{utensils}{utensils} {totalReviews}</h2>
                    <h3>{type}</h3>
                    <h3>{location}</h3>
                    <h4>{amenities}</h4>
                </div>
            </div>
        )
    }
}

export default BusinessReviewCards;