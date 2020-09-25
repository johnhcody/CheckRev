import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import SearchBar from '../search/searchbar';
import SearchIcons from '../search/search_icons';
import BusinessCategoriesContainer from './business_categories_container';
import BusinessByCityContainer from './business_by_city_container';
import FeaturedBusinessesContainer from './featured_businesses_container';

class Splash extends React.Component {
    constructor(props) {
        super(props)
    }

    
    
    render() {
        return(
            <div>
            <div className="splash-parent">
                    <div className="wrap-me">
                    <GreetingContainer />
                    <div className="logo-wrapper">
                    <img src={window.logo} />
                    </div>
                    <SearchBar />
                    <br/>
                    <SearchIcons />
                    </div>
                    <br/>
            </div>
                    <BusinessCategoriesContainer />
                    <BusinessByCityContainer />
                    <FeaturedBusinessesContainer />
            </div>
        )
    }
}

export default Splash;