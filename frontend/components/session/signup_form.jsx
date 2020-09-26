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
            <ul className="signup-form-container-error">
                {this.props.errors.map((error, idx) => {
                    return <li key={idx}>{error}</li>
                })}
            </ul>
        )
    }









// original 
    render() {
        return (
            <div>
            <NavBar />
            <div className="form-wrap-all">
            <div className="form-container">
                <div>
            <form onSubmit={this.handleSubmit}>
                                <div className="signup-title">
                                    <h2>Sign Up for CheckRev</h2>
                                </div>
                    <br/>
                    <label>
                    <input type="text"
                            value={this.state.firstName}
                            placeholder="First Name"
                            onChange={this.update('firstName')}
                            />
                    </label>
                    <label>
                    <input type="text"
                            value={this.state.lastName}
                            placeholder="Last Name"
                            onChange={this.update('lastName')} />
                    </label>
                    <label>
                    <input type="text"
                            value={this.state.email}
                            placeholder="Email address"
                            onChange={this.update('email')} />
                    </label>
                    <label>
                    <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password" />
                    </label>
                    <label>
                    <input type="number"
                            value={this.state.zipcode}
                            placeholder="Zip Code"
                            onChange={this.update('zipcode')} />
                    </label>
                    <label>
                    <input type="datetime"
                            value={this.state.birthdate}
                            placeholder="MM/DD/YYYY"
                            onChange={this.update('birthdate')} />
                    </label>
                    <br/>
                <button>Sign Up</button>
                {this.handleErrors()}
                <br/>
                <div className="form-footer">
                <h4>You already have a CheckRev account?!? <Link to='/login' style={{ textDecoration: 'none', color: '#E33258' }}>Log In!</Link></h4>
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