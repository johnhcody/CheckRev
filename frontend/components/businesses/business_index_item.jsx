import React from 'react';


const PostIndexItem = (props) => (
        <div className="bus-item-container">
            <div className="bus-photo">
                <img src="#" alt="#"/>
                <div className="bus-description">
                        <h1>El Dugout</h1>
                        <h2>icons</h2>
                        <h3>categories</h3>
                        <h3>amenities</h3>
                    <div className="bus-contact">
                        <h4>617 442 5515</h4>
                        <h4>123 Address St.</h4>
                    </div>
                </div>
                <div className="bus-review">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum sed sem vel elementum. Maecenas vitae porttitor nibh. Sed ante libero, commodo vel ipsum vitae, suscipit sollicitudin felis. Duis vitae tellus in.</p>
                </div>
                <div className="bus-box-bottom">
                    <button>Find a Table</button>
                    <h2>amenity</h2>
                </div>
            </div>

    </div>

)

export default PostIndexItem;