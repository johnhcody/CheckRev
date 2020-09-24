import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import SearchBar from '../search/searchbar';
import SearchIcons from '../search/search_icons';
import BusinessCategoriesContainer from './business_categories_container'

class Splash extends React.Component {
    constructor(props) {
        super(props)
    }

    
    
    render() {
        return(
            <div>
            <div className="splash-parent"                  
                style={{ backgroundImage: `url(${window.chef})` }}>
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
                    <div>
                    <BusinessCategoriesContainer />
                    </div>
            </div>
        )
    }
}

export default Splash;