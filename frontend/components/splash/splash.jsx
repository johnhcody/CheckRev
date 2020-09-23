import React from 'react';
import GreetingContainer from '../greeting/greeting_container';

class Splash extends React.Component {
    constructor(props) {
        super(props)
    }

    
    render() {
        return(
            <div className="splash-parent">
                    <GreetingContainer />
                    <img className="logo" src={window.logo} />
            </div>
        )
    }
}

export default Splash;