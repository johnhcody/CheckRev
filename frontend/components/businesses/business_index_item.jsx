import React from 'react';


const PostIndexItem = props => {
    debugger
    return (
            <div className="bus-item-container">
                <div className="bus-photo">
                    <img src={props.photoUrl} alt="#"/>
                </div>  
                    <div className="bus-description">
                            <h1>{props.name}</h1>
                            <h2>G G G G G</h2>
                        <h2>{props.businessCategory}</h2>
                        <h3>amenities</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum sed sem vel elementum. Maecenas vitae porttitor nibh. Sed ante libero, commodo vel ipsum vitae, suscipit sollicitudin felis. Duis vitae tellus in.</p>
                        <div className="bus-contact">
                        </div>
                    </div>
            </div>
    )
}




export default PostIndexItem;