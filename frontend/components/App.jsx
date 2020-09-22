import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SplashContainer from './splash/splash_container'
import { AuthRoute, ProtectedRoute } from '../util/route_utils'
//Wrap ProtectedRoute around paths that are restricted from users who are not logged in.

const App = () => (
    <div>
        <header>
            <h1>CheckRev App.jsx</h1>
        </header>
        <Switch>
            <Route exact path='/' component={SplashContainer} />
            <AuthRoute exact path='/login' component={LoginFormContainer} />
            <AuthRoute exact path='/signup' component={SignupFormContainer} />
        </Switch>
    </div>
);


export default App;