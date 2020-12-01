import React from 'react';
import BusinessSearch from '../businesses/business_search';
import ShowImages from './show_images';
import BusinessShowCard from './business_show_card';
import BusinessShowInfo from './business_show_info';
import HoursAndLocation from './hours_location';
import ShowMap from './show_map';
import BusinessHours from './business_hours';
import Amenities from './amenities';
import Footer from '../splash/footer';
import Copyright from '../splash/copyright';
import ReviewIndex from '../reviews/review_index_container';

class BusinessShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
        this.rerenderParent = this.rerenderParent.bind(this);
    }

    componentDidMount() {
        debugger
        window.scrollTo(0,0);
        this.props.fetchBusiness(this.props.match.params.businessId);
        this.props.fetchUsers();
    }

    rerenderParent() {
  
        this.setState({value: this.state.value + 1})
        this.props.fetchBusiness(this.props.match.params.businessId);
        this.props.fetchUsers();
    }

    componentDidUpdate(prevProps, prevState) {
        debugger
        if (this.props !== prevProps) {
            this.setState({value: this.state.value + 1})
            //this.props.fetchBusiness(this.props.match.params.businessId)
        } else if (this.props.reviews !== prevProps.reviews) {
            debugger
            window.location.reload()
        }
    } 
    
    render() {
        if (!this.props.business || !this.props.allUsers) {
            return null;
        } else {
        return (
        <div>
            <BusinessSearch updateFilters={this.props.updateFilters} />
            <ShowImages />
            <div className="bus-show-body-wrapper">
                <div className="bus-show-left-wrapper">
                        <BusinessShowCard 
                            key={this.props.business}
                            id={this.props.business.id}
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
                            photoUrl={this.props.business.photoUrl}
                            reviews={this.props.business.reviews}
                             
                            currentUser={this.props.currentUser}
                            history={this.props.history}
                            priceRating={this.props.business.priceRating}/>
                        <HoursAndLocation />
                    <div className="hours-and-map">
                        <ShowMap 
                        business={this.props.business}
                        lat={this.props.business.lat}
                        lng={this.props.business.lng}/>
                        <BusinessHours/>
                    </div>
                    <Amenities 
                        amenities={this.props.business.amenities}/>
                    <ReviewIndex 
                        reviews={this.props.business.reviews}
                        allUsers={this.props.allUsers}
                        currentUser={this.props.currentUser}
                        business={this.props.business}
                        rerenderParent={this.rerenderParent}
                        fetchBusiness={this.props.fetchBusiness}
                    />
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