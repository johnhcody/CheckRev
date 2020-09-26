import React from 'react';

class BusinessByCategory extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="div-me">
                <div className="bus-by-cat-title">
                    <h2>See Businesses by Category</h2>
                </div>
            <div className="bus-by-cat-container-parent">
                <div className="bus-by-cat-card-container">
                    <div className="bus-by-cat-card">
                        <a href="#">
                            <img src={window.pro} />
                            <div className="bus-by-cat-text">
                        <p>Professional Services</p>
                            </div>
                        </a>
                    </div>
                    <div className="bus-by-cat-card">
                        <a href="#">
                            <img src={window.rest} />
                                <div className="bus-by-cat-text">
                            <p>Restaurants</p>
                            </div>
                        </a>
                    </div>
                    <div className="bus-by-cat-card">
                            <a href="#">
                                <img src={window.home} />
                                <div className="bus-by-cat-text">
                                <p>Home Services</p>
                                </div>
                            </a>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default BusinessByCategory;