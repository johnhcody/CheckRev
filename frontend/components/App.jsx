import React from 'react';
import { Route } from 'react-router-dom'
import SessionForm from './session/session_form'


const App = () => (
    <div>
        <header>
            <h1>CheckRev App.jsx</h1>
            <Route path='/signup' component={SessionForm} />
            <Route path='/login' component={SessionForm} />
        </header>
    </div>
);


export default App;