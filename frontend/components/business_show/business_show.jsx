import React from 'react';
import BusinessSearch from '../businesses/business_search';
import ShowImages from './show_images';
import BusinessShowCard from './business_show_card';

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
            <div className="bus-show-card-wraper">

            </div>
        </div>
        )
    }
}

export default BusinessShow;