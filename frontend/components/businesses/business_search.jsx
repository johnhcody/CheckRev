import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class BusinessSearch extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const magnifyingGlass = <FontAwesomeIcon icon="search" />
        const utensils = <FontAwesomeIcon icon="utensils" />
        return (
            <div className="bus-nav-searchbar">
                <div class="bus-nav-logo">
                    <img src={window.logo} alt=""/>
                </div>
                <form className="bus-search-parent">
                    <div className="bus-search-child">
                        <label className="search search-type">  Find
                        <input type="search" placeholder="plumbers, delivery, takeout" />
                        </label>
                        <label>Near
                        <input className="search search-location" type="search" placeholder="Times Square, NY" />
                        </label>
                    </div>
                    <button className="bus-search-button" type="submit">{magnifyingGlass}</button>
                </form>
            </div>
        )
    }
}

export default BusinessSearch;