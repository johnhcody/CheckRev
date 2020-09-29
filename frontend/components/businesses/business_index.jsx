import React from 'react';
import Footer from '../splash/footer';
import Copyright from '../splash/copyright';
import BusinessSearch from './business_search';
import BusinessIndexItem from './business_index_item';
import MainMap from './maps/main_map';
import PriceFilters from './price_filters'
import CategoryFilter from './category_filter';
import BusinessIndexFooter from './business_index_footer';


class BusinessIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchBusinesses()
    }

    render() {

        const { address1, address2, businessCategory, businessType, city, name, phoneNumber, webAddress, zipcode } = this.props.businesses;
        if (!this.props.businesses) {
            
            return null;
        } else {
            debugger
            return (
                <div>
                <BusinessSearch />
            <div>
                <div className="bus-idx-wrapper">
                    <PriceFilters />
                    {/* <CategoryFilter /> */}
                        <div className="bus-item-wrapper">
                        {
                            this.props.businesses.map(business => {  
                                debugger                      
                                return <BusinessIndexItem 
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
                                key={business.id}
                                />
                            })
                        }
                        </div>
                    <div className="map-wrapper">
                        <MainMap />
                </div>
                    </div>
            </div>
                <BusinessIndexFooter />
                </div>
            )
        }
    }
}

export default BusinessIndex;