import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BusinessReviewCard from './business_review_cards'


class FeaturedBusinesses extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const solidStar = <FontAwesomeIcon icon={["fas", "star"]} />
        const regStar = <FontAwesomeIcon icon={["far", "star"]} />
        const utensils = <FontAwesomeIcon icon="utensils" />
        return (
            <div>
                <div className="featured-bus-title">
                    <h2>Featured Businesses</h2>
                </div>
                <div className="featured-business-cat-container-parent">
                    <div className="featured-bus-cards-container">
                        <div className="featured-bus-card">
                            <a href="#" >
                                <img src={window.construction} />
                                <h1>Speedy Auto Repair</h1>
                                <h2>{solidStar}{solidStar}{solidStar} 10 reviews</h2>
                                <h3>Business type</h3>
                                <h3>location</h3>
                                <h4>amenities</h4>
                            </a>
                        </div>
                        <div className="featured-bus-card">
                            <a href="#" >
                                <img src={window.construction} />
                                <h1>Creative Construction</h1>
                                <h2>{solidStar}{solidStar}{solidStar} 10 reviews</h2>
                                <h3>Business type</h3>
                                <h3>location</h3>
                                <h4>amenities</h4>
                            </a>
                        </div>
                        <div className="featured-bus-card">
                            <a href="#" >
                                <img src={window.construction} />
                                <h1>Subprime Lenders</h1>
                                <h2>{solidStar}{solidStar}{solidStar} 10 reviews</h2>
                                <h3>Business type</h3>
                                <h3>location</h3>
                                <h4>amenities</h4>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="featured-bus-footer">
                    <p><a href="#">See all businesses</a></p>
                </div>
            </div>
        )
    }
}

export default FeaturedBusinesses;



function BusinessCard() {

    // receive an array from props
    // map the elements of the to the correspond
    // run a test similar to guest user... 
    // the values 
    return (
        <div>hello form business card</div>
    )
}