import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Amenities() {
    const bell = <FontAwesomeIcon icon="concierge-bell" />
    const wifi = <FontAwesomeIcon icon={['fas', 'wifi']} />
    const bone = <FontAwesomeIcon icon={['fas', 'bone']} />
    const music = <FontAwesomeIcon icon={['fas', 'music']} />
    const carrot = <FontAwesomeIcon icon={['fas', 'carrot']} />
    return (
        <div className="amenities-title">
            <h1>Amenities and More</h1>
            <div className="icon-bus-show-rating">
                <div className="icon-bus-show-rating-left">
                    <a>{carrot}</a>
                    <h2>Vegetarian Options</h2>
                </div>
                <div className="icon-bus-show-rating-right">
                    <a>{bone}</a>
                    <h2>Dog Friendly</h2>
                </div>
            </div>
            <div className="icon-bus-show-rating">
                <div className="icon-bus-show-rating-left">
                    <a>{music}</a>
                    <h2>Live Music</h2>
                </div>
                <div className="icon-bus-show-rating-right">
                    <a>{bone}</a>
                    <h2>Free Wifi</h2>
                </div>
            </div>
        </div>
    )
}

export default Amenities;