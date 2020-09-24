import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import SearchBar from '../search/searchbar';

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
            </div>
        )
    }
}

export default Splash;