import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './session/login_page';
import LoginFormContainer from './session/login_form_container'
import SignupFormContainer from './session/signup_form_container';
import SplashContainer from './splash/splash_container'
import BusinessIndexContainer from './businesses/business_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Modal from './businesses/modal_container';
import BusinessShowContainer from './business_show/business_show_container';
import { faCheckSquare, faCoffee, faSearch, faUtensils, faHome, faConciergeBell, faStar, faCheck, faChevronDown, faUser,  } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faSearch, faUtensils, faHome, faConciergeBell, faStar, faCheck, faChevronDown, faUser)

//Wrap ProtectedRoute around paths that are restricted from users who are not logged in.

const App = () => (
    <div>
        <Modal />
        <Switch>
            <Route exact path='/' component={SplashContainer} />
            <AuthRoute exact path='/login' component={LoginFormContainer} />
            <AuthRoute exact path='/signup' component={SignupFormContainer} />
            <Route exact path='/search' component={BusinessIndexContainer} />
            <Route path='/businesses/:businessId' component={BusinessShowContainer} />
        </Switch>
    </div>
);


export default App;