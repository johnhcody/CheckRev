import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class BusinessByCity extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const magnifyingGlass = <FontAwesomeIcon icon="search" />
        return (
            <div className="bus-by-city">
                <div>
            <div className="bus-by-city-title">
                <div>
                    <h2>Search by City</h2>
                </div>
            </div>
                <div className="bus-by-city-container">
                    <a href="#" >New York</a>
                    <a href="#" >Boston</a>
                    <a href="#" >San Francisco</a>
                    <a href="#" >Phoenix</a>
                    <a href="#" >Chicago</a>
                    <a href="#" >St. Louis</a>
                    <a href="#" >{magnifyingGlass} More Cities</a>
                </div>
            </div>

            </div>
        )
    }
}

export default BusinessByCity;