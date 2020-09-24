import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import SearchBar from '../search/searchbar';
import SearchIcons from '../search/search_icons';

class Splash extends React.Component {
    constructor(props) {
        super(props)
    }

    
    
    render() {
        return(
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
            </div>
        )
    }
}

export default Splash;