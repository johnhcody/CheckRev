import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from 'react-router-dom'
import AverageRating from '../business_show/average_rating';

class BusinessIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.renderPriceRating = this.renderPriceRating.bind(this);

    }

    renderPriceRating(rating) {
        switch (rating) {
            case 1:
                return <h3>$</h3>
            case 2:
                return <h3>$$</h3>
            case 3:
                return <h3>$$$</h3>
            case 4:
                return <h3>$$$$</h3>
            default:
                break;
        }
    }

    renderSnippet() {
        if (this.props.reviews.length === 0) {
            return <p>No reviews yet!  Check out this business and show your support.</p>
        } else {
            const reviewBody = this.props.reviews[this.props.reviews.length - 1].body;
            return reviewBody.length > 220 ? <p>{reviewBody.slice(0,220) + "..."}</p> : <p>{reviewBody}</p> 
        }
    }

    render() {
        const utensils = <FontAwesomeIcon icon="utensils" />
        const star = <FontAwesomeIcon icon={['fas', 'star']} />
        return (
            <Link to={`/businesses/${this.props.id}`} style={{textDecoration: "none"}}><div className="bus-item-container">
                
                    <div className="bus-photo">
                        <img src={this.props.photoUrl} alt="#"/>
                    </div>  
                    <div className="bus-text">
                        <div className="bus-description">
                            <div className="left-wrapper">
                                <h1>{this.props.name}</h1>
                                <div className="star-num-ratings-wrapper">
                                    <AverageRating reviews={this.props.reviews}/>
                                <h2>{this.props.reviews.length === 1 ? "1 Review" : this.props.reviews.length.toString() + " Reviews"}</h2>
                                </div>
                                {this.renderPriceRating(this.props.priceRating)}
                                <h3>{this.props.businessCategory}</h3>
                                <h4>{this.props.amenities.split(',').join(', ')}</h4>
                            </div>
                            <div className="right-wrapper">
                                <h4>{this.props.phoneNumber}</h4>
                                <h4>{this.props.address1}</h4>
                                <h4>{this.props.address2}</h4>
                                <h4>{this.props.city}, {this.props.state}</h4>
                            </div>
                        </div>
                        
                        <div className="bus-review-snippet">
                            {this.renderSnippet()}
                        </div>
                    </div>
                </div></Link>
        )
    }
}




export default BusinessIndexItem;