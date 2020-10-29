import React from 'react';
import BusinessSearch from '../businesses/business_search';
import ShowImages from './show_images';
import BusinessShowCard from './business_show_card';
import BusinessShowInfo from './business_show_info';
import HoursAndLocation from './hours_location';
import ShowMap from './show_map';
import BusinessHours from './business_hours';
import Amenities from './amenities';
import ReviewProfile from '../reviews/review_profile';
import ReviewText from '../reviews/review_text';
import Footer from '../splash/footer';
import Copyright from '../splash/copyright';

class BusinessShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

        this.props.fetchBusiness(this.props.match.params.businessId);
    }
    
    render() {
        if (!this.props.business) {
            return null;
        } else {

        return (
        <div>
            <BusinessSearch />
            <ShowImages />
            <div className="bus-show-body-wrapper">
                <div className="bus-show-left-wrapper">
                        <BusinessShowCard 
                            name={this.props.business.name}
                            address1={this.props.business.address1}
                            address2={this.props.business.address2}
                            businessCategory={this.props.business.businessCategory}
                            businessType={this.props.business.businessType}
                            city={this.props.business.city}
                            name={this.props.business.name}
                            phoneNumber={this.props.business.phoneNumber}
                            webAddress={this.props.business.webAddress}
                            zipcode={this.props.business.zipcode}
                            photoUrl={this.props.business.photoUrl}/>
                        <HoursAndLocation />
                    <div className="hours-and-map">
                        <ShowMap 
                        business={this.props.business}
                        lat={this.props.business.lat}
                        lng={this.props.business.lng}/>
                        <BusinessHours/>
                    </div>
                    <Amenities />
                    <div className="review-header">
                        <header>Recent Reviews</header> 
                    </div> 
                    <div className="review-wrapper">
                        <ReviewProfile />
                        <ReviewText />
                    </div>
                    <div className="review-wrapper">
                        <ReviewProfile />
                        <ReviewText />
                    </div>
                    <div className="review-wrapper">
                        <ReviewProfile />
                        <ReviewText />
                    </div>
                    <div className="review-wrapper">
                        <ReviewProfile />
                        <ReviewText />
                    </div>
                </div>
                <div className="bus-show-right-wrapper">
                   <BusinessShowInfo 
                    phoneNumber={this.props.business.phoneNumber}
                    webAddress={this.props.business.webAddress}
                   />
                </div>
            </div>
            <div className="show-padding">
            </div>
            <Footer />
            <Copyright />
        </div>
        )
    }
}
}

export default BusinessShow;