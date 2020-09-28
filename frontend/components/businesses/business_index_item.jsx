import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const PostIndexItem = props => {
    const utensils = <FontAwesomeIcon icon="utensils" />
    return (
            <div className="bus-item-container">

                <div className="bus-photo">
                    <img src={props.photoUrl} alt="#"/>
                </div>  
                <div className="bus-text">
                    <div className="bus-description">
                        <div className="left-wrapper">
                            <h1>{props.name}</h1>
                            <h2>{utensils}{utensils}{utensils}{utensils}{utensils} 10 Reviews</h2>
                            <h3>amenities, amenities, amenities</h3>
                            <h4>delivery takeout outdoor seating</h4>
                        </div>
                        <div className="right-wrapper">
                            <h4>{props.phoneNumber}</h4>
                            <h4>{props.address1}</h4>
                            <h4>{props.address2}</h4>
                        </div>
                    </div>
                    
                    <div className="bus-review-snippet">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum sed sem vel elementum. Maecenas vitae porttitor nibh. Sed ante libero, commodo vel ipsum vitae, suscipit sollicitudin felis. Duis vitae tellus in.</p>
                    </div>
                </div>
            </div>
    )
}




export default PostIndexItem;