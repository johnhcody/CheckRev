import React from 'react';
import Footer from '../splash/footer';
import Copyright from '../splash/copyright';
import BusinessSearch from './business_search_container';
import BusinessIndexItem from './business_index_item';
import MainMap from './maps/main_map';
import PriceFilters from './price_filters'
import BusinessIndexFooter from './business_index_footer';
import BusinessIcons from './business_icons';

class BusinessIndex extends React.Component {
    constructor(props) {
        super(props);
        
        if (!this.props.history.location.state) {
            this.state = {
                businesses: this.props.businesses.slice(0,8),
                refresh: false
            }
        } else if (this.props.history.location.state.splashSearch) {
            this.state = {
                businesses: this.props.history.location.state.businesses,
                city: this.props.history.location.state.city,
                category: this.props.history.location.state.category
            }

        } else if (this.props.history.location.state.splashIcon){
            this.state = {
                businesses: this.props.history.location.state.businesses,
                business_type: this.props.history.location.state.business_type
            }
        } else {
            this.state = {
                businesses: this.props.history.location.state.businesses,
                refresh: false
        }
    }
        //props.history.location.state.businesses returns 8 businesses with filter from splash page in the constructor
    }

    componentDidMount() {
        
        window.scrollTo(0, 0);
        const nyBounds = {
            northEast: { lat: 41.11397721785646, lng: -73.72406848490463 },
            southWest: { lat: 40.333415677855285, lng: -74.27338493306415 }
        };
        const bosBounds = {
            northEast: { lat: 42.380949269680855, lng: -71.04117284414933 },
            southWest: { lat: 42.33338023333157, lng: -71.0755051221593 }
        };
        const phxBounds = {
            northEast: { lat: 33.66836967925308, lng: -111.94077413618193 },
            southWest: { lat: 33.23870320484366, lng: -112.21543236026169 }
        };
        const stlBounds = {
            northEast: { lat: 39.03194112554274, lng: -89.9213493686937 },
            southWest: { lat: 38.22734740339782, lng: -90.47066581685321 }
        };
        const sfBounds = {
            northEast: { lat: 37.93873674004917, lng: -122.31110462819451 },
            southWest: { lat: 37.53146403390572, lng: -122.58576285227427 }
        };
        const chiBounds = {
            northEast: { lat: 42.24915706476533, lng: -87.38564177592026 },
            southWest: { lat: 41.48214241690811, lng: -87.93495822407978 }
        };
        const noBounds = {
            northEast: { lat: 41.098328841719976, lng: -73.67774177592024 },
            southWest: { lat: 40.31758272571303, lng: -74.22705822407976 }
        }



        if (this.state.category == '' && this.state.city !== '') {
            
            if (this.state.city.toLowerCase().includes("york") || this.state.city.toLowerCase().includes("ny")) {
                this.props.updateFilters({ 'bounds': nyBounds, 'category': [] });
            } else if (this.state.city.toLowerCase().includes("boston")) {
                this.props.updateFilters({ 'bounds': bosBounds, 'category': [] });
            } else if (this.state.city.toLowerCase().includes("phoenix")) {
                this.props.updateFilters({ 'bounds': phxBounds, 'category': [] });
            } else if (this.state.city.toLowerCase().includes("louis") || this.state.city.toLowerCase().includes("stl")) {
                this.props.updateFilters({ 'bounds': stlBounds, 'category': [] });
            } else if (this.state.city.toLowerCase().includes("francisco") || this.state.city.toLowerCase().includes("sf")) {
                this.props.updateFilters({ 'bounds': sfBounds, 'category': [] });
            } else if (this.state.city.toLowerCase().includes("chicago")) {
                this.props.updateFilters({ 'bounds': chiBounds, 'category': [] });
            } else {
                this.props.updateFilters({ 'bounds': noBounds })
            }
        } else if (this.state.category && this.state.category !== '' && this.state.city !== '') {
            
            if (this.state.city.toLowerCase().includes("york") || this.state.city.toLowerCase().includes("ny")) {
                this.props.updateFilters({ 'bounds': nyBounds, 'category': [this.state.category] });
            } else if (this.state.city.toLowerCase().includes("boston")) {
                this.props.updateFilters({ 'bounds': bosBounds, 'category': [this.state.category] });
            } else if (this.state.city.toLowerCase().includes("phoenix")) {
                this.props.updateFilters({ 'bounds': phxBounds, 'category': [this.state.category] });
            } else if (this.state.city.toLowerCase().includes("louis") || this.state.city.toLowerCase().includes("stl")) {
                this.props.updateFilters({ 'bounds': stlBounds, 'category': [this.state.category] });
            } else if (this.state.city.toLowerCase().includes("francisco") || this.state.city.toLowerCase().includes("sf")) {
                this.props.updateFilters({ 'bounds': sfBounds, 'category': [this.state.category] });
            } else if (this.state.city.toLowerCase().includes("chicago")) {
                this.props.updateFilters({ 'bounds': chiBounds, 'category': [this.state.category] });
            } else {
                this.props.updateFilters('category', [this.state.category]);
            }
        } else if (this.state.category && this.state.category !== '' && this.state.city == '') {
            
            if (this.state.city.toLowerCase().includes("york") || this.state.city.toLowerCase().includes("ny")) {
                this.props.updateFilters({ 'category': [this.state.category] });
            } else if (this.state.city.toLowerCase().includes("boston")) {
                this.props.updateFilters({ 'category': [this.state.category] });
            } else if (this.state.city.toLowerCase().includes("phoenix")) {
                this.props.updateFilters({ 'category': [this.state.category] });
            } else if (this.state.city.toLowerCase().includes("louis") || this.state.city.toLowerCase().includes("stl")) {
                this.props.updateFilters({ 'category': [this.state.category] });
            } else if (this.state.city.toLowerCase().includes("francisco") || this.state.city.toLowerCase().includes("sf")) {
                this.props.updateFilters({ 'category': [this.state.category] });
            } else {
                this.props.updateFilters({ 'category': [this.state.category] });
            }
        } else if (this.state.business_type && this.state.business_type !== "") {
            
            this.props.updateFilters({"business_type": [this.state.business_type]})
        }

        //this.props.fetchBusinesses();            
    }

    componentDidUpdate(prevProps, prevState) {
        
        if (this.props.businesses !== prevProps.businesses) {
            // this.setState({businesses: this.props.businesses});
            this.setState({businesses: this.props.businesses})
            // this.refresh();
            // when this condition we have new businesses from the db, but map has not yet updated...need to trigger a re-render to the map
        } 
    }

    refresh() {
        this.setState({refresh: !this.state.refresh})
    }

    clearFilters() {
        
        this.props.updateFilters({
            bounds: {},
            priceRating: "0",
            category: [],
            business_type: []
        });
        //this.setState({refresh: !this.state.refresh})
    }

    render() {
        
        const { address1, address2, businessCategory, businessType, city, name, phoneNumber, webAddress, zipcode } = this.props.businesses;
        if (!this.props) {
            return null;
        } else if (this.props.businesses.length === 0 || this.state.businesses.length == 0) {
            return (
                    <div>
                        <BusinessSearch 
                        updateFilters={this.props.updateFilters} 
                        history={this.props.history}/>
                        <div>
                            <div className="bus-idx-wrapper">
                                <PriceFilters  
                                updateFilters={this.props.updateFilters} />
                                <div className="bus-item-wrapper">
                                        <h6 >Sorry, there are no businesses that match your search</h6>
                                        <div className="search-no-results-top">
                                            <ul >
                                                <header>Why is that?</header>
                                                <li>Currently, we have businesses in New York, Boston, Phoenix, St. Louis, Chicago, and San Francisco.</li>
                                                <li>It is also possible your search was too specific...try general terms (try the caetgories listed below!)</li>
                                                <li>You can also try moving the map over one of the above cities</li>
                                        <button onClick={() => this.clearFilters()}>Click here to clear all filters and try again</button>
                                            </ul>
                                        </div>
                                    <div className="search-no-results-bottom">
                                            <ul >
                                                <header>Try searching by category... Here is a list of categories of current businesses</header>
                                                <span>Restaurant Categories</span>
                                                    <li id="top-list-item">Japanese</li>
                                                    <li>Thai</li>
                                                    <li>Indian</li>
                                                    <li>Mexican</li>
                                                    <li>Italian</li>
                                                    <li>Home Cooking</li>
                                                    <li>Bar</li>
                                                    <li id="bottom-list-item">Cafe</li>
                                                <span>Professional Services</span>
                                                    <li id="top-list-item">Banking</li>
                                                    <li>Legal</li>
                                                    <li>Finance</li>
                                                    <li>Insurance</li>
                                                    <li>Investing</li>
                                                    <li>Web Design</li>
                                                    <li>Marketing</li>
                                                    <li id="bottom-list-item">Accounting</li>
                                                <span>Home Services</span>
                                                    <li id="top-list-item">Cleaning</li>
                                                    <li>Landscaping</li>
                                                    <li>Security</li>
                                                    <li>Real Estate</li>
                                                    <li>Construction</li>
                                                    <li>Interior Design</li>
                                                    <li>Property Management</li>
                                                    <li id="bottom-list-item">Roofing</li>
                                            </ul>
                                        </div>
                                </div>
                                <MainMap 
                                key={this.props.businesses}
                                businesses={this.props.businesses} 
                                updateFilters={this.props.updateFilters}
                                />
                            </div>
                        </div>
                        <BusinessIndexFooter />
                    </div>
                )
            
        } else {
            
            const businessesToMap = this.state.businesses.length > 8 ? this.state.businesses.slice(0,8) : this.state.businesses
            return (
                <div>
                <BusinessSearch
                    updateFilters={this.props.updateFilters} 
                    history={this.props.history}
                    />
                
            <div>
                <div className="bus-idx-wrapper">
                    <PriceFilters 
                        updateFilters={this.props.updateFilters} />
                        <div className="bus-item-wrapper">
                        {
                            businessesToMap.map(business => {  
                                return <BusinessIndexItem 
                                id={business.id}
                                address1={business.address1}
                                address2={business.address2}
                                businessCategory={business.businessCategory}
                                businessType={business.businessType}
                                city={business.city}
                                state={business.state}
                                name={business.name}
                                phoneNumber={business.phoneNumber}
                                webAddress={business.webAddress}
                                zipcode={business.zipcode}
                                photoUrl={business.photoUrl}
                                reviews={business.reviews}
                                key={business.id}
                                priceRating={business.priceRating}
                                amenities={business.amenities}
                                />
                            })
                        }
                        </div> 
                        <MainMap 
                                key={this.props.businesses}
                                refresh={this.state.refresh}
                                businesses={businessesToMap} 
                        updateFilters={this.props.updateFilters}/>
                    </div>
            </div>
                <BusinessIndexFooter />
                </div>
            )
        }
    }
}

export default BusinessIndex;