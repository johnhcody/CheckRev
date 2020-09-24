import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../navbar/navbar'

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

    render() {
        return (
            <div>
            <NavBar />
            <div className="form-container">
            <form onSubmit={this.handleSubmit}>
                <h2>Join the CheckRev Community</h2>
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
                    <input type="text"
                            value={this.state.zipcode}
                            placeholder="Zip Code"
                            onChange={this.update('zipcode')} />
                    </label>
                    <label>
                    <input type="text"
                            value={this.state.birthdate}
                            placeholder="MM/YY/YYY"
                            onChange={this.update('birthdate')} />
                    </label>
                <button>Sign Up</button>
                {this.handleErrors()}
                <br/>
                <p>You already have a CheckRev account?!? <Link to='/login' style={{ textDecoration: 'none', color: '#E33258' }}>Log In!</Link></p>
            </form>
            </div>
            <br/>
            </div>
        )
    }
}

export default SessionForm;