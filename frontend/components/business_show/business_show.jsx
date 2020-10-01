import React from 'react';
import BusinessSearch from '../businesses/business_search';
import ShowImages from './show_images';
import BusinessShowCard from './business_show_card';
import BusinessShowInfo from './business_show_info';

class BusinessShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        debugger
        this.props.fetchBusiness(this.props.match.params.postId);
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