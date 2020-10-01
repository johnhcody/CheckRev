import React from 'react';
import BusinessSearch from '../businesses/business_search';
import ShowImages from './show_images';
import BusinessShowCard from './business_show_card';
import BusinessShowInfo from './business_show_info';
import HoursAndLocation from './hours_location';
import ShowMap from './business_show_map';
import ShowMapPlaceHolder from './show_map_placeholder';
import BusinessHours from './business_hours';
import Amenities from './amenities';

class BusinessShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        debugger
        console.log(this.props)
        console.log(this.props.match.params.businessId)
        this.props.fetchBusiness(this.props.match.params.businessId);
    }
    
    render() {
        debugger
        return (
        <div>
            <BusinessSearch />
            <ShowImages />
            <div className="bus-show-body-wrapper">
                <div className="bus-show-left-wrapper">
                        <BusinessShowCard />
                        <HoursAndLocation />
                    <div className="hours-and-map">
                        <ShowMapPlaceHolder />
                        <BusinessHours />
                    </div>
                    <Amenities />
                </div>
                <div className="bus-show-right-wrapper">
                   <BusinessShowInfo />
                </div>
            </div>
        </div>
        )
    }
}

export default BusinessShow;