import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Amenities() {
    const bell = <FontAwesomeIcon icon="concierge-bell" />
    return (
        <div className="amenities-title">
            <h1>Amenities and More</h1>
            <div className="icon-bus-show-rating">
                <div className="icon-bus-show-rating-left">
                    <a>{bell}</a>
                    <h2>Amenities</h2>
                </div>
                <div className="icon-bus-show-rating-right">
                    <a>{bell}</a>
                    <h2>Amenities</h2>
                </div>
            </div>
            <div className="icon-bus-show-rating">
                <div className="icon-bus-show-rating-left">
                    <a>{bell}</a>
                    <h2>Amenities</h2>
                </div>
                <div className="icon-bus-show-rating-right">
                    <a>{bell}</a>
                    <h2>Amenities</h2>
                </div>
            </div>
        </div>
    )
}

export default Amenities;