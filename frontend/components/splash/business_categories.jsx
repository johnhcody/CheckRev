import React from 'react';
import { Link } from 'react-router-dom';


class BusinessCategories extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(e) {
        debugger
        const bosBounds = {
            northEast: { lat: 42.380949269680855, lng: -71.04117284414933 },
            southWest: { lat: 42.33338023333157, lng: -71.0755051221593 }
        };
        let text = ''
        if (e.currentTarget.innerText == "Cafés") {
            this.props.updateFilters({'bounds': bosBounds, 'category': ["Cafe"]});
        } else if (e.currentTarget.innerText == "Home Cleaning") {
            this.props.updateFilters({'bounds': bosBounds, 'category': ["Cleaning"] })
        } else {
            this.props.updateFilters({'bounds': bosBounds, 'category': [e.currentTarget.innerText]})
        }
        //const text = e.currentTarget.innerText

        //this.props.updateFilters({'category': text})
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
                        <a onClick={this.handleClick} >
                        <img src={window.landscaping} />
                        <div className="bus-container">
                            <h3>Landscaping</h3>
                        </div>
                        </a>
                    </div>
                </div>
                <div className="bus-cards-container">
                <Link to={{
                    pathname: "/search"
                    
                }}>
                    <div className="bus-card">
                        <img src={window.coffee} />
                        <div className="bus-container">
                        <h3>Cafés</h3>
                        </div>
                    </div>
                </Link>
                </div>
                <div className="bus-cards-container">
                        <a onClick={this.handleClick} >
                    <div className="bus-card">
                        <img src={window.cleaning} />
                        <div className="bus-container">
                            <h3>Home Cleaning</h3>
                        </div>
                    </div>
                </a>
                </div>
                <div className="bus-cards-container">
                        <a onClick={this.handleClick}>
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