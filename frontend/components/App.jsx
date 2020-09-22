import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import {SplashComponent} from './session/splash'
import { AuthRoute, ProtectedRoute } from '../util/route_utils'
//Wrap ProtectedRoute around paths that are restricted from users who are not logged in.

const App = () => (
    <div>
        <header>
            <h1>CheckRev App.jsx</h1>
            <Route path='/login' component={LoginFormContainer} />
            <Route exact path='/' component={SplashComponent} />
            <AuthRoute path='/signup' component={SignupFormContainer} />
        </header>
    </div>
);


export default App;