import React from 'react';
import { Route } from 'react-router-dom';
import LoginForm from './session/login_form';
import SignupForm from './session/signup_form';



const App = () => (
    <div>
        <header>
            <h1>CheckRev App.jsx</h1>
            <Route path='/signup' component={SignupForm} />
            <Route path='/login' component={LoginForm} />
        </header>
    </div>
);


export default App;