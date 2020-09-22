import React from 'react';
import GreetingContainer from '../greeting/greeting_container'


class Splash extends React.Component {
    constructor(props) {
        super(props)
    }

    
    render() {
        debugger
        return(
            <div>
                <p>SPLASH!</p>
                <GreetingContainer />
            </div>
        )
    }
}

export default Splash;