import React from 'react';
import Footer from '../splash/footer';
import Copyright from '../splash/copyright';
import BusinessSearch from './business_search';
import BusinessIndexItem from './business_index_item';
import MainMap from './maps/main_map';
import PriceFilters from './price_filters'
import BusinessIndexFooter from './business_index_footer';
import BusinessIcons from './business_icons';

class BusinessIndex extends React.Component {
    constructor(props) {
        super(props);
        debugger
        this.state = {
            businesses: this.props.history.location.state.businesses,
            refresh: false
        }
        //props.history.location.state.businesses returns 8 businesses with filter from splash page in the constructor
    }

    componentDidMount() {
        debugger
        window.scrollTo(0, 0);
        //this.props.fetchBusinesses();            
    }

    componentDidUpdate(prevProps, prevState) {
        debugger
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

    render() {

        const { address1, address2, businessCategory, businessType, city, name, phoneNumber, webAddress, zipcode } = this.props.businesses;
        if (this.props.businesses.length === 0) {
            return (
                    <div>
                        <BusinessSearch 
                        updateFilters={this.props.updateFilters} />
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
                                        <button onClick={() => window.location.reload()}>Click here to clear all filters and try again</button>
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
                                businesses={this.props.businesses} 
                                updateFilters={this.props.updateFilters}
                                />
                            </div>
                        </div>
                        <BusinessIndexFooter />
                    </div>
                )
            
        } else {
            debugger
            return (
                <div>
                <BusinessSearch
                    updateFilters={this.props.updateFilters} />
                
            <div>
                <div className="bus-idx-wrapper">
                    <PriceFilters 
                        updateFilters={this.props.updateFilters} />
                        <div className="bus-item-wrapper">
                        {
                            this.state.businesses.map(business => {  
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
                                key={this.state.businesses}
                                refresh={this.state.refresh}
                                businesses={this.state.businesses} 
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