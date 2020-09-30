import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown1 from './dropdown1';
import Dropdown2 from './dropdown2';
import Dropdown3 from './dropdown3';

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
                <Dropdown1 />
                <Dropdown2 />
                <Dropdown3 />
                {/* <Dropdown2 />
                <Dropdown3 /> */}
                {/* <a href="#" className="icon-prof">Professional Services {bell}</a>
                <a href="#" className="icon-rest">Home Services {home}</a> */}
            </div>
        )
    }

}


export default BusinessIcons;