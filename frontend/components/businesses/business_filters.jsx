import React from 'react';
import PriceFilters from './business_price_filters';

class BusinessFilters extends React.Component {
    constructor(props){
        super(props)
    }


    

    render() {
        return (
            <div className="filter-wrapper">
                <PriceFilters />
                <div className="filter-container">
                    <h1>hello</h1>
                    <h1>hello</h1>
                    <h1>hello</h1>
                </div>
            </div>
        )
    }
}

export default BusinessFilters