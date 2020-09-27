import React from 'react';
import Footer from '../splash/footer';
import Copyright from '../splash/copyright';
import BusinessSearch from './business_search';
import PostIndexItem from './business_index_item';
import BusinessIndexItem from './business_index_item';


class BusinessIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        debugger
        return (
        <div>
            <BusinessSearch />
            <BusinessIndexItem />
            <PostIndexItem />
            <Footer />
            <Copyright />
        </div>
        )
    }
}

export default BusinessIndex;