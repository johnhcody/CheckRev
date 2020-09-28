import React from 'react';


const PostIndexItem = props => {
    debugger
    return (
            <div className="bus-item-container">
                <div className="bus-photo">
                    <img src="#" alt="#"/>
                    <div className="bus-description">
                            <h1>{props.name}</h1>
                            <h2>G G G G G</h2>
                        <div className="bus-contact">
                            <h4>{props.phoneNumber}</h4>
                            <h4>{props.address1}</h4>
                            <h4>{props.address2}</h4>
                        </div>
                    </div>
                    <div className="bus-review">
                        <h2>{props.businessCategory}</h2>
                        <h3>amenities</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum sed sem vel elementum. Maecenas vitae porttitor nibh. Sed ante libero, commodo vel ipsum vitae, suscipit sollicitudin felis. Duis vitae tellus in.</p>
                    </div>
                    <div className="bus-box-bottom">
                        <button>Find a Table</button>
                        <h2>amenity</h2>
                    </div>
                </div>  
            </div>
    )
}




export default PostIndexItem;