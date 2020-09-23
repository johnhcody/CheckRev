import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import Logo from './logo';

class Splash extends React.Component {
    constructor(props) {
        super(props)
    }

    
    render() {
        // debugger
        return(
            <div className="splash-parent">
                    <GreetingContainer />
                    <Logo />
            </div>
        )
    }
}

export default Splash;