import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Amenities(props) {
    const bell = <FontAwesomeIcon icon="concierge-bell" />
    const wifi = <FontAwesomeIcon icon={['fas', 'wifi']} />
    const bone = <FontAwesomeIcon icon={['fas', 'bone']} />
    const music = <FontAwesomeIcon icon={['fas', 'music']} />
    const carrot = <FontAwesomeIcon icon={['fas', 'carrot']} />

    debugger
    const amenitiesArray = props.amenities.split(',');
    const iconsArray = amenitiesArray.map(amenity => {
        if (amenity == "Dogs Allowed") {
            return <FontAwesomeIcon icon={['fas', 'bone']} />
        } else if (amenity == "Karaoke") {
            return <FontAwesomeIcon icon={['fas', 'microphone']} />
        } else if (amenity == "Live Music") {
            return <FontAwesomeIcon icon={['fas', 'music']} />
        } else if (amenity == "Free Wifi") {
            return <FontAwesomeIcon icon={['fas', 'wifi']} />
        } else if (amenity == "Has TV") {
            return <FontAwesomeIcon icon={['fas', 'tv']} />
        } else if (amenity == "Accepts Credit Cards") {
            return <FontAwesomeIcon icon={['fas', 'credit-card']} />
        } else if (amenity == "Open to All") {
            return <FontAwesomeIcon icon={['fas', 'laugh']} />
        } else if (amenity == "Vegetarian Options") {
            return <FontAwesomeIcon icon={['fas', 'carrot']} />
        } else if (amenity == "Parking Lot") {
            return <FontAwesomeIcon icon={['fas', 'parking']} />
        } else if (amenity == "Satisfaction Guaranteed") {
            return <FontAwesomeIcon icon={['fas', 'thumbs-up']} />
        } else if (amenity == "Great Atmosphere") {
            return <FontAwesomeIcon icon={['fas', 'glass-cheers']} />
        } else if (amenity == "Offers Insurance") {
            return <FontAwesomeIcon icon={['fas', 'house-damage']} />
        } else if (amenity == "Discounts Available") {
            return <FontAwesomeIcon icon={['fas', 'tags']} />
        } else if (amenity == "Service Oriented") {
            return <FontAwesomeIcon icon="concierge-bell" />
        }  else {
            return <FontAwesomeIcon icon="concierge-bell" />
        }
    })
    debugger
    return (
        <div className="amenities-title">
            <h1>Amenities and More</h1>
            <div className="icon-bus-show-rating">
                <div className="icon-bus-show-rating-left">
                    <a>{iconsArray[0]}</a>
                    <h2>{amenitiesArray[0]}</h2>
                </div>
                <div className="icon-bus-show-rating-right">
                    <a>{iconsArray[1]}</a>
                    <h2>{amenitiesArray[1]}</h2>
                </div>
            </div>
            <div className="icon-bus-show-rating">
                <div className="icon-bus-show-rating-left">
                    <a>{iconsArray[2]}</a>
                    <h2>{amenitiesArray[2]}</h2>
                </div>
                <div className="icon-bus-show-rating-right">
                    <a>{iconsArray[3]}</a>
                    <h2>{amenitiesArray[3]}</h2>
                </div>
            </div>
        </div>
    )
}

export default Amenities;