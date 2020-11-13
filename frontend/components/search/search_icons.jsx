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
                            businesses: this.props.businesses.filter(business => business.businessType == "Restaurant" && business.city == "Boston").slice(0, 8),
                            fromSplash: true
                        }
                    }}>{utensils} Restuarant</Link>
                    <Link className="icon-prof" to={{
                        pathname: "/search",
                        state: {
                            businesses: this.props.businesses.filter(business => business.businessType == "Professional Services" && business.city == "Boston").slice(0, 8),
                            fromSplash: true
                        }
                    }}>{bell} Professional Services</Link>
                    <Link className="icon-rest" to={{
                        pathname: "/search",
                        state: {
                            businesses: this.props.businesses.filter(business => business.businessType == "Home Services" && business.city == "Boston").slice(0, 8),
                            fromSplash: true
                        }
                    }}>{home} Home Services</Link>
                </div>
            )
        }

    }

}


export default SearchIcons;

