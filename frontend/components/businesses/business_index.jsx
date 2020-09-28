import React from 'react';
import Footer from '../splash/footer';
import Copyright from '../splash/copyright';
import BusinessSearch from './business_search';
import BusinessIndexItem from './business_index_item';


class BusinessIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        debugger
        this.props.fetchBusinesses()
    }

    render() {
        debugger
        const { address1, address2, businessCategory, businessType, city, name, phoneNumber, webAddress, zipcode } = this.props.businesses;
        if (!this.props.businesses) {
            
            return null;
        } else {

            return (
            <div>
                <BusinessSearch />
                <div className="bus-index-item-wrapper">
                {
                    this.props.businesses.map(business => {                        
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
                            key={business.id}
                        />
                    })
                }
                </div>
                <Footer />
                <Copyright />
            </div>
            )
        }
    }
}

export default BusinessIndex;