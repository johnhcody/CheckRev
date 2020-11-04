import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from 'react-router-dom'
import AverageRating from '../business_show/average_rating';

class BusinessIndexItem extends React.Component {
    constructor(props) {
        super(props)
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
                                    <h2>{this.props.reviews.length.toString()} Reviews</h2>
                                </div>
                                <h3>amenities, amenities, amenities</h3>
                                <h4>delivery takeout outdoor seating</h4>
                            </div>
                            <div className="right-wrapper">
                                <h4>{this.props.phoneNumber}</h4>
                                <h4>{this.props.address1}</h4>
                                <h4>{this.props.address2}</h4>
                            </div>
                        </div>
                        
                        <div className="bus-review-snippet">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum sed sem vel elementum. Maecenas vitae porttitor nibh. Sed ante libero, commodo vel ipsum vitae, suscipit sollicitudin felis. Duis vitae tellus in.</p>
                        </div>
                    </div>
                </div></Link>
        )
    }
}




export default BusinessIndexItem;