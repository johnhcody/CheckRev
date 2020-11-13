import React from 'react';
import { Link } from 'react-router-dom';

class BusinessByCategory extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        debugger
        return (
            <div className="div-me">
                <div className="bus-by-cat-title">
                    <h2>See Businesses by Category</h2>
                </div>
            <div className="bus-by-cat-container-parent">
                <div className="bus-by-cat-card-container">
                    <div className="bus-by-cat-card">
                        <Link to={{
                            pathname: `/search`,
                            state: {
                                businesses: Object.values(this.props.businesses).filter(business => business.businessType == "Professional Services" && business.city == "Boston").slice(0, 8),
                                fromSplash: true
                            }}} style={{ textDecoration: "none" }}>
                        
                            <img src={window.pro} />
                            <div className="bus-by-cat-text">
                        <p>Professional Services</p>
                            </div>
                        
                        </Link>
                    </div>
                    <div className="bus-by-cat-card">
                        <Link to={{
                            pathname: `/search`,
                            state: {
                                businesses: Object.values(this.props.businesses).filter(business => business.businessType == "Restaurant" && business.city == "Boston").slice(0, 8),
                                fromSplash: true
                            }
                        }} style={{ textDecoration: "none" }}>
                            <img src={window.rest} />
                                <div className="bus-by-cat-text">
                            <p>Restaurants</p>
                            </div>
                        
                        </Link>
                    </div>
                    <div className="bus-by-cat-card">
                        <Link to={{
                            pathname: `/search`,
                            state: {
                                businesses: Object.values(this.props.businesses).filter(business => business.businessType == "Home Services" && business.city == "Boston").slice(0, 8),
                                fromSplash: true
                            }
                        }} style={{ textDecoration: "none" }}>
                                <img src={window.home} />
                                <div className="bus-by-cat-text">
                                <p>Home Services</p>
                                </div>
                            
                        </Link>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default BusinessByCategory;