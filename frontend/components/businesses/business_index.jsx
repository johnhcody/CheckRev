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
        const { businesses } = this.props;
        const { address1, address2, businessCategory, businessType, city, name, phoneNumber, webAddress, zipcode } = this.props.businesses;
        return (
        <div>
            <BusinessSearch />
            <div className="bus-index-item-wrapper">
            {
                businesses.map(business => (
                    <BusinessIndexItem 
                        address1={address1}
                        address2={address2}
                        businessCategory={businessCategory}
                        businessType={businessType}
                        city={city}
                        name={name}
                        phoneNumber={phoneNumber}
                        webAddress={webAddress}
                        zipcode={zipcode}
                        key={business.id}
                    />
                ))
            }
            </div>
            <Footer />
            <Copyright />
        </div>
        )
    }
}

export default BusinessIndex;