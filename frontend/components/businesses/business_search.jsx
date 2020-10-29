import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IndexGreetingContainer from './index_greeting_container';
import BusinessIcons from './business_icons';
import { Link } from 'react-router-dom';

class BusinessSearch extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const magnifyingGlass = <FontAwesomeIcon icon="search" />
        const utensils = <FontAwesomeIcon icon="utensils" />
        return (
            <div className="bus-nav-searchbar">
                <div className="bus-nav-logo">
                    <Link to="/"><img src={window.logo} alt="" /></Link>
                </div>
                <div className="search-and-icons">
                    <form className="bus-search-parent">
                        <div className="bus-search-child">
                            <label className="search search-type">
                            <input id="filler" type="search" placeholder="plumbers, delivery, takeout" />
                            </label>
                            <label id="divider">|
                            <input className="search search-location" type="search" placeholder="Times Square, NY" />
                            </label>
                        </div>
                        <button className="bus-search-button" type="submit">{magnifyingGlass}</button>
                    </form>
                    <BusinessIcons />

                </div>
                <IndexGreetingContainer />
            </div>
        )
    }
}

export default BusinessSearch;