import React from 'react';


class BusinessCategories extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className="div-me">
                <div className="rev-title">
                    <h2>Find Great Businesses</h2>
                </div>
            <div className="business-cat-container-parent">
                <div className="bus-cards-container">
                    <div className="bus-card">
                        <a href="#" >
                        <img src={window.landscaping} />
                        <div className="bus-container">
                            <h3>Landscaping</h3>
                        </div>
                        </a>
                    </div>
                </div>
                <div className="bus-cards-container">
                <a href="#" >
                    <div className="bus-card">
                        <img src={window.coffee} />
                        <div className="bus-container">
                        <h3>Cafés</h3>
                        </div>
                    </div>
                </a>
                </div>
                <div className="bus-cards-container">
                        <a href="#" >
                    <div className="bus-card">
                        <img src={window.cleaning} />
                        <div className="bus-container">
                            <h3>Home Cleaning</h3>
                        </div>
                    </div>
                </a>
                </div>
                <div className="bus-cards-container">
                        <a href="#">
                    <div className="bus-card">
                        <img src={window.hotel} />
                        <div className="bus-container">
                            <h3>Interior Design</h3>
                        </div>
                    </div>
                </a>
                </div>
            </div>
            </div>
        )
    }
}

export default BusinessCategories;