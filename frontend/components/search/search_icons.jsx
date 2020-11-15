import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

class SearchIcons extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const utensils = <FontAwesomeIcon icon="utensils" />
        const home = <FontAwesomeIcon icon="home" />
        const bell = <FontAwesomeIcon icon="concierge-bell" />
        if (!this.props.businesses) {
            return null;
        } else {
            return (
                <div className="icons-parent">
                    <Link className="icon-rest" to={{
                        pathname: "/search",
                        state: {
                            businesses: [],
                            splashIcon: true,
                            business_type: "Restaurant"

                        }
                    }}>{utensils} Restuarant</Link>
                    <Link className="icon-prof" to={{
                        pathname: "/search",
                        state: {
                            businesses: [],
                            splashIcon: true,
                            business_type: "Professional Services"
                        }
                    }}>{bell} Professional Services</Link>
                    <Link className="icon-rest" to={{
                        pathname: "/search",
                        state: {
                            businesses: [],
                            splashIcon: true,
                            business_type: "Home Services"
                        }
                    }}>{home} Home Services</Link>
                </div>
            )
        }

    }

}


export default SearchIcons;

