import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BusinessReviewCard from './business_review_cards'
import FeaturedBusineesItem from './featured_business_item';
import { Link } from 'react-router-dom';

class FeaturedBusinesses extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchBusinesses()
    }

    render() {
        const solidStar = <FontAwesomeIcon icon={["fas", "star"]} />
        const regStar = <FontAwesomeIcon icon={["far", "star"]} />
        const utensils = <FontAwesomeIcon icon="utensils" />
        const numBusinesses = 3;
        const featuredItems = this.props.businesses.slice(0, numBusinesses)
        return (
            <div>
                <div className="featured-bus-title">
                    <h2>Featured Businesses</h2>
                </div>
                <div className="featured-business-cat-container-parent">
                    <div className="featured-bus-cards-container">
                    {featuredItems.map(business => {
                        return <FeaturedBusineesItem 
                        key={business.id}
                        id={business.id}
                        name={business.name}
                        photo={business.photo}
                        type={business.businessType}
                        city={business.city}
                        photoUrl={business.photoUrl}
                        state={business.state}
                        reviews={business.reviews}
                        />
                    })}
                    </div>
                </div>
                <div className="featured-bus-footer">
                    <Link to={'search/'}>See all businesseses</Link>
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