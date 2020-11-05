import React from 'react';
import { Link } from 'react-router-dom';
import AverageRating from '../business_show/average_rating';


class FeaturedBusinessItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="featured-bus-card">
                <Link to={`/businesses/${this.props.id}`}>
                    <img src={this.props.photoUrl} />
                    <h1>{this.props.name}</h1>
                    <div className="splash-ratings-wrapper">
                        <AverageRating reviews={this.props.reviews} />
                        <h2>{this.props.reviews.length === 1 ? "1 Review" : this.props.reviews.length.toString() + " Reviews"}</h2>
                    </div>
                    <h3>{this.props.type}</h3>
                    <h3>{this.props.city}, {this.props.state}</h3>
                
                </Link> 
            </div>
        )
    }
}

export default FeaturedBusinessItem;