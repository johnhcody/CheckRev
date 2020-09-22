import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SplashComponent from './session/splash'



const App = () => (
    <div>
        <header>
            <h1>CheckRev App.jsx</h1>
            <Route path='/signup' component={SignupFormContainer} />
            <Route path='/login' component={LoginFormContainer} />
            <Route exact path='/' component={SplashComponent} />
        </header>
    </div>
);


export default App;