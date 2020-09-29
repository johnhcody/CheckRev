import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Dropdown from './dropdown'

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
                {/* <a href="#" className="icon-rest">Restaurants {utensils} </a> */}
                <Dropdown />
                {/* <Dropdown2 />
                <Dropdown3 /> */}
                <a href="#" className="icon-prof">Professional Services {bell}</a>
                <a href="#" className="icon-rest">Home Services {home}</a>
            </div>
        )
    }

}


export default BusinessIcons;