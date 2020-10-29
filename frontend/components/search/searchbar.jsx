import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Searchbar extends React.Component {
    constructor(props) {
        super(props) 
    }


    render() {
        const magnifyingGlass = <FontAwesomeIcon icon="search" />
        return (
            <form className="search-parent">
                <div className="search-child">
                    <label className="search search-type">  Find
                        <input id="filler" type="search" placeholder="plumbers, delivery, takeout" />
                    </label>
                    <label>Near
                        <input className="search search-location" type="search" placeholder="Times Square, NY" />
                    </label>
                </div>
                        <button className="search-button" type="submit">{magnifyingGlass}</button>
            </form>
        )
    }
}

export default Searchbar;