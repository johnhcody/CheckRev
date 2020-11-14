import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

class Searchbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            businesses: [],
            splashSearch: true,
            function: {},
            city: '',
            category: ''
        } 
    }

    handleChange(field) {
        return e => {
            this.setState({[field]: e.currentTarget.value})
        }
    } 

    render() {
        const magnifyingGlass = <FontAwesomeIcon icon="search" />
        return (
            <form className="search-parent">
                <div className="search-child">
                    <label className="search search-type">  Find
                        <input id="filler" type="search" placeholder="plumbers, delivery, takeout" onChange={this.handleChange('category')}/>
                    </label>
                    <label>Near
                        <input className="search search-location" type="search" placeholder="Times Square, NY" onChange={this.handleChange('city')}/>
                    </label>
                </div>
                    <Link to={{
                        pathname: "/search",
                        state: {
                            businesses: [],
                            splashSearch: true,
                            city: this.state.city,
                            category: this.state.category
                        }
                    }}>
                    <button className="search-button" type="submit">{magnifyingGlass}</button>
                    </Link>    
            </form>
        )
    }
}

export default Searchbar;