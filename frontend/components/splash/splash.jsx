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
                    <GreetingContainer />
                    <img className="logo" src={window.logo} />
                    <SearchBar />
                    <SearchIcons />
            </div>
        )
    }
}

export default Splash;