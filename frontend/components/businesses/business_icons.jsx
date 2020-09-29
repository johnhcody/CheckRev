import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class BusinessIcons extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const utensils = <FontAwesomeIcon icon="utensils" />
        const home = <FontAwesomeIcon icon="home" />
        const bell = <FontAwesomeIcon icon="concierge-bell" />
        return (
            <div className="bus-icons-parent">
                <a href="#" className="icon-rest">{utensils} Restaurants</a>
                <a href="#" className="icon-prof">{bell} Professional Services</a>
                <a href="#" className="icon-rest">{home} Home Services</a>
            </div>
        )
    }

}


export default BusinessIcons;