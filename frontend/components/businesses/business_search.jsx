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
            city: '',
            bounds: {},
            refresh: true
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        const nyBounds = {
            northEast: { lat: 41.11397721785646, lng: -73.72406848490463 },     
            southWest: { lat: 40.333415677855285, lng: -74.27338493306415 }};
        const bosBounds = {
            northEast: { lat: 42.380949269680855, lng: -71.04117284414933 },
            southWest: { lat: 42.33338023333157, lng: -71.0755051221593 }};
        const phxBounds = {
            northEast: { lat: 33.66836967925308, lng: -111.94077413618193 },
            southWest: { lat: 33.23870320484366, lng: -112.21543236026169 }};
        const stlBounds = {
            northEast: { lat: 39.03194112554274, lng: -89.9213493686937 },
            southWest: { lat: 38.22734740339782, lng: -90.47066581685321 }};
        const sfBounds = {
            northEast: { lat: 37.93873674004917, lng: -122.31110462819451 },
            southWest: { lat: 37.53146403390572, lng: -122.58576285227427 }};
        const chiBounds = {
            northEast: { lat: 42.24915706476533, lng: -87.38564177592026 },
            southWest: { lat: 41.48214241690811, lng: -87.93495822407978 }};
        const noBounds = {
            northEast: { lat: 41.098328841719976, lng: -73.67774177592024 },
            southWest: { lat: 40.31758272571303, lng: -74.22705822407976 }}

        debugger
        e.preventDefault();

        if (this.state.category == '' && this.state.city !== '') {
            if (this.state.city.toLowerCase().includes("york") || this.state.city.toLowerCase().includes("ny")) {
                this.props.updateFilters({'bounds': nyBounds, 'category': []});
            } else if (this.state.city.toLowerCase().includes("boston")) {
                this.props.updateFilters({'bounds': bosBounds, 'category': []});
            } else if (this.state.city.toLowerCase().includes("phoenix")) {
                this.props.updateFilters({'bounds': phxBounds, 'category': []});
            } else if (this.state.city.toLowerCase().includes("louis") || this.state.city.toLowerCase().includes("stl")) {
                this.props.updateFilters({'bounds': stlBounds, 'category': []});
            } else if (this.state.city.toLowerCase().includes("francisco") || this.state.city.toLowerCase().includes("sf")) {
                this.props.updateFilters({'bounds': sfBounds, 'category': []});
            } else if (this.state.city.toLowerCase().includes("chicago")) {
                this.props.updateFilters({'bounds': chiBounds, 'category': []});
            } else {
                this.props.updateFilters({'bounds': noBounds})
            }
        } else if (this.state.category !== '' && this.state.city !== '') {
            if (this.state.city.toLowerCase().includes("york") || this.state.city.toLowerCase().includes("ny")) {
                this.props.updateFilters({'bounds': nyBounds, 'category': [this.state.category]});
            } else if (this.state.city.toLowerCase().includes("boston")) {
                this.props.updateFilters({'bounds': bosBounds, 'category': [this.state.category]});
            } else if (this.state.city.toLowerCase().includes("phoenix")) {
                this.props.updateFilters({ 'bounds': phxBounds, 'category': [this.state.category]});
            } else if (this.state.city.toLowerCase().includes("louis") || this.state.city.toLowerCase().includes("stl")) {
                this.props.updateFilters({'bounds': stlBounds, 'category': [this.state.category]});
            } else if (this.state.city.toLowerCase().includes("francisco") || this.state.city.toLowerCase().includes("sf")) {
                debugger
                this.props.updateFilters({'bounds': sfBounds, 'category': [this.state.category]});
            } else if (this.state.city.toLowerCase().includes("chicago")) {
                this.props.updateFilters({ 'bounds': chiBounds, 'category': [this.state.category] });
            } else {
                this.props.updateFilters('category', [this.state.category]);
            }
        } else if (this.state.category !== '' && this.state.city == '') {
            if (this.state.city.toLowerCase().includes("york") || this.state.city.toLowerCase().includes("ny")) {
                this.props.updateFilters({'category': [this.state.category]});
            } else if (this.state.city.toLowerCase().includes("boston")) {       
                this.props.updateFilters({'category': [this.state.category]});
            } else if (this.state.city.toLowerCase().includes("phoenix")) {
                this.props.updateFilters({'category': [this.state.category]});
            } else if (this.state.city.toLowerCase().includes("louis") || this.state.city.toLowerCase().includes("stl")) {
                this.props.updateFilters({'category': [this.state.category]});
            } else if (this.state.city.toLowerCase().includes("francisco") || this.state.city.toLowerCase().includes("sf")) {
                this.props.updateFilters({'category': [this.state.category]});
            } else {
                this.props.updateFilters({ 'category': [this.state.category]});
            }
        }

        debugger
        this.setState({refresh: !this.state.refresh})
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
                            <input id="filler" type="search" placeholder="Thai, Landscaping, Legal" onChange={this.update('category')}/>
                            </label>
                            <label id="divider">|
                            <input className="search search-location" type="search" placeholder="New York, Boston, Chicago..." onChange={this.update('city')}/>
                            </label>
                        </div>
                        <button className="bus-search-button" type="submit">{magnifyingGlass}</button>
                    </form>
                    <BusinessIcons 
                        updateFilters={this.props.updateFilters}
                        history={this.props.history}/>

                </div>
                <IndexGreetingContainer />
            </div>
        )
    }
}

export default BusinessSearch;