import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IndexGreetingContainer from './index_greeting_container';
import BusinessIcons from './business_icons';
import { Link } from 'react-router-dom';

class BusinessSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: '',
            city: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }


    update(field) {
        return e => this.setState({[field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        debugger
        e.preventDefault();
        this.props.updateFilters(this.state)
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
                    <form className="bus-search-parent" onSubmit={this.handleSubmit}>
                        <div className="bus-search-child">
                            <label className="search search-type">
                            <input id="filler" type="search" placeholder="Thai, Landscaping, Legal" />
                            </label>
                            <label id="divider">|
                            <input className="search search-location" type="search" placeholder="Times Square, NY" onChange={this.update('city')}/>
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