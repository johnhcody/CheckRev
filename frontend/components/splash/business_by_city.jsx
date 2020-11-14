import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom";

class BusinessByCity extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            businesses: [],
            splashSearch: true,
            city: '',
            category: ''
        }
    }
    render() {
        const magnifyingGlass = <FontAwesomeIcon icon="search" />
        return (
            <div className="bus-by-city">
                <div>
            <div className="large-title">
                <div>
                    <h2>Search by City</h2>
                </div>
            </div>
                <div className="bus-by-city-container">
                    <Link to={{
                        pathname: "/search",
                        state: {
                            businesses: [],
                            splashSearch: true,
                            city: "New York",
                            category: ""
                        }
                    }}>New York</Link>
                    <Link to={{
                        pathname: "/search",
                        state: {
                            businesses: [],
                            splashSearch: true,
                            city: "Boston",
                            category: ""
                        }
                    }}>Boston</Link>
                    <Link to={{
                        pathname: "/search",
                        state: {
                            businesses: [],
                            splashSearch: true,
                            city: "San Francisco",
                            category: ""
                        }
                    }}>San Francisco</Link>
                    <Link to={{
                        pathname: "/search",
                        state: {
                            businesses: [],
                            splashSearch: true,
                            city: "Phoenix",
                            category: ""
                        }
                    }}>Phoenix</Link>
                    <Link to={{
                        pathname: "/search",
                        state: {
                            businesses: [],
                            splashSearch: true,
                            city: "Chicago",
                            category: ""
                        }
                    }}>Chicago</Link>
                    <Link to={{
                        pathname: "/search",
                        state: {
                            businesses: [],
                            splashSearch: true,
                            city: "St. Louis",
                            category: ""
                        }
                    }}>St. Louis</Link>
                    <Link to={'/search'}>{magnifyingGlass} Search</Link>
                </div>
            </div>

            </div>
        )
    }
}

export default BusinessByCity;