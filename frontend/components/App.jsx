import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import {SplashComponent} from './session/splash'
import { AuthRoute, ProtectedRoute } from '../util/route_utils'
import GreetingContainer from './greeting/greeting_container'
//Wrap ProtectedRoute around paths that are restricted from users who are not logged in.

const App = () => (
    <div>
        <header>
            <h1>CheckRev App.jsx</h1>
            <GreetingContainer />
        </header>
        <Switch>
            <AuthRoute path='/login' component={LoginFormContainer} />
            <AuthRoute path='/signup' component={SignupFormContainer} />
            <Route exact path='/' component={SplashComponent} />
        </Switch>
    </div>
);


export default App;