import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../navbar/navbar';
import Copyright from '../splash/copyright';
import Footer from '../splash/footer';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault(e);
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }


    handleErrors() {
        return (
            <ul>
                {this.props.errors.map((error, idx) => {
                    return <li key={idx}>{error}</li>
                })}
            </ul>
        )
    }

    handleFocus1() {
        document.getElementById('signin-fname').style.backgroundColor = '#cbcbed';
    }

    handleBlur1() {
        document.getElementById('signin-fname').style.backgroundColor = 'white';
    }
    handleFocus2() {
        document.getElementById('signin-lname').style.backgroundColor = '#cbcbed';
    }

    handleBlur2() {
        document.getElementById('signin-lname').style.backgroundColor = 'white';
    }

    handleFocus3() {
        document.getElementById('signin-email').style.backgroundColor = '#cbcbed';
    }

    handleBlur3() {
        document.getElementById('signin-email').style.backgroundColor = 'white';
    }
    handleFocus4() {
        document.getElementById('signin-pass').style.backgroundColor = '#cbcbed';
    }

    handleBlur4() {
        document.getElementById('signin-pass').style.backgroundColor = 'white';
    }
    handleFocus5() {
        document.getElementById('signin-zip').style.backgroundColor = '#cbcbed';
    }

    handleBlur5() {
        document.getElementById('signin-zip').style.backgroundColor = 'white';
    }
    handleFocus6() {
        document.getElementById('signin-bday').style.backgroundColor = '#cbcbed';
    }

    handleBlur6() {
        document.getElementById('signin-bday').style.backgroundColor = 'white';
    }
// original 
    render() {
        return (
            <div>
            <NavBar />
                <div className="handle-errors-wrapper">
                    <div className="handle-errors">
                        {this.handleErrors()}
                    </div>
                </div>
            <div className="form-wrap-all">
            <div className="form-container">
                <div>
            <form onSubmit={this.handleSubmit}>
                                <div className="signup-title">
                                    <h2>Sign Up for CheckRev</h2>
                                    <h3>Discover New Businesses</h3>
                                </div>
                    <br/>
                    <div className="name-wrapper">
                        <input id="signin-fname" type="text"
                            value={this.state.firstName}
                            placeholder="First Name"
                            onChange={this.update('firstName')}
                            onFocus={this.handleFocus1}
                            onBlur={this.handleBlur1}/>
                        <input id="signin-lname" type="text"
                            value={this.state.lastName}
                            placeholder="Last Name"
                            onChange={this.update('lastName')}
                            onFocus={this.handleFocus2}
                            onBlur={this.handleBlur2}/>
                    </div>
                    <input  id="signin-email"
                            type="text"
                            value={this.state.email}
                            placeholder="Email address"
                            onChange={this.update('email')}
                            onFocus={this.handleFocus3}
                            onBlur={this.handleBlur3} />
                    <input  id="signin-pass"
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password" 
                            onFocus={this.handleFocus4}
                            onBlur={this.handleBlur4}/>
                    <input  id="signin-zip"
                            type="number"
                            value={this.state.zipcode}
                            placeholder="Zip Code"
                            onChange={this.update('zipcode')} 
                            onFocus={this.handleFocus5}
                            onBlur={this.handleBlur5}/>
                    <input  id="signin-bday"
                            type="datetime"
                            value={this.state.birthdate}
                            placeholder="MM/DD/YYYY"
                            onChange={this.update('birthdate')}
                            onFocus={this.handleFocus6}
                            onBlur={this.handleBlur6} />
                <button>Sign Up</button>
                <div className="form-footer">
                <h4>Already on CheckRev? <Link to='/login' style={{ textDecoration: 'none', color: '#E33258' }}>Log In!</Link></h4>
                </div>
            </form>
            </div>
            </div>
                    <div className="red-carpet-sign">
                        <img src={window.redCarpet} />
                    </div>
            </div>
                <Footer />
                <Copyright />
            </div>
        )
    }
}

export default SessionForm;