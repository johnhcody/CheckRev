import React from 'react';
import Footer from '../splash/footer';
import Copyright from '../splash/copyright';
import BusinessSearch from './business_search';
import BusinessIndexItem from './business_index_item';
import MainMap from './maps/main_map';
import PriceFilters from './price_filters'
import CategoryFilter from './category_filter';
import BusinessIndexFooter from './business_index_footer';
import TypeFilter from './type_filter';
import BusinessIcons from './business_icons';

class BusinessIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            businesses: []
        }
    }

    componentDidMount() {
        debugger
        window.scrollTo(0, 0);
        this.props.fetchBusinesses();            
    }

    componentDidUpdate(prevProps) {
        debugger
        if (this.props.businesses !== prevProps.businesses) {
            this.setState({businesses: this.props.businesses})
        }
    }

    render() {

        const { address1, address2, businessCategory, businessType, city, name, phoneNumber, webAddress, zipcode } = this.props.businesses;
        if (this.props.businesses.length === 0) {
            return (
                    <div>
                        <BusinessSearch />

                        <div>
                            <div className="bus-idx-wrapper">
                                <PriceFilters  
                                updateFilters={this.props.updateFilters} />
                                <div className="bus-item-wrapper">
                                        <h1>Sorry, there are no businesses that match your search</h1>
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

            return (
                <div>
                <BusinessSearch />
                
            <div>
                <div className="bus-idx-wrapper">
                    <PriceFilters 
                        updateFilters={this.props.updateFilters} />
                        <div className="bus-item-wrapper">
                        {
                            this.props.businesses.map(business => {  
                                return <BusinessIndexItem 
                                id={business.id}
                                address1={business.address1}
                                address2={business.address2}
                                businessCategory={business.businessCategory}
                                businessType={business.businessType}
                                city={business.city}
                                name={business.name}
                                phoneNumber={business.phoneNumber}
                                webAddress={business.webAddress}
                                zipcode={business.zipcode}
                                photoUrl={business.photoUrl}
                                reviews={business.reviews}
                                key={business.id}
                                priceRating={business.priceRating}
                                />
                            })
                        }
                        </div> 
                        <MainMap businesses={this.props.businesses} 
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