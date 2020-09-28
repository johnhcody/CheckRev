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
        this.props.fetchBusinesses()
    }

    render() {
        const { address1, address2, businessCategory, businessType, city, name, phoneNumber, webAddress, zipcode } = this.props.businesses;
        if (!this.props.businesses) {
            
            return null;
        } else {

            return (
                <div>
                <BusinessSearch />
            <div>
                <div className="bus-idx-wrapper">
                    <div className="filter-placeholder">
                    </div>
                        <div className="bus-item-wrapper">
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
                                photoUrl={business.photoUrl}
                                key={business.id}
                                />
                            })
                        }
                        </div>
                    <div className="map-placeholder">
                    </div>
                </div>
            </div>
                <div className="footer-placeholder">
                    <ul className="bus-idx-footer">
                        <li>things</li>
                        <li>things</li>
                        <li>things</li>
                        <li>things</li>
                    </ul>
                    <ul className="bus-idx-footer">
                        <li>things</li>
                        <li>things</li>
                        <li>things</li>
                        <li>things</li>
                    </ul>
                    <ul className="bus-idx-footer">
                        <li>things</li>
                        <li>things</li>
                        <li>things</li>
                        <li>things</li>
                    </ul>
                </div>
                <Copyright />
                </div>
            )
        }
    }
}

export default BusinessIndex;