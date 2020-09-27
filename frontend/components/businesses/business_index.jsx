import React from 'react';
import Footer from '../splash/footer';
import Copyright from '../splash/copyright';
import BusinessSearch from './business_search';



class BusinessIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
        <div>
            <BusinessSearch />
            <Footer />
            <Copyright />
        </div>
        )
    }
}

export default BusinessIndex;