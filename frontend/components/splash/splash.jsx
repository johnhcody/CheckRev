import React from 'react';
import GreetingContainer from '../greeting/greeting_container'


class Splash extends React.Component {
    constructor(props) {
        super(props)
    }

    
    render() {
        // debugger
        return(
            <div className="splash-parent">
                <span className="splash-span">
                    <p>SPLASH!</p>
                    <GreetingContainer />
                </span>
            </div>
        )
    }
}

export default Splash;