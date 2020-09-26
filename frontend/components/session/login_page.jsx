import React from 'react';
import LoginForm from './login_form';
import Navbar from '../navbar/navbar';
import Copyright from '../splash/copyright';
import Footer from '../splash/footer';


function LoginPage() {
    return (
        <div>
            <Navbar />
            <LoginForm />
            <Footer />
            <Copyright />
        </div>
    ) 
}

export default LoginPage;