import React from 'react';
import { Link } from 'react-router-dom';

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
        debugger
        return (
            <ul>
                {this.props.errors.map((error, idx) => {
                    return <li key={idx}>{error}</li>
                })}
            </ul>
        )
    }

    render() {
        debugger
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <h3>Join the CheckRev Community</h3>
                    <label>First Name
                    <input type="text"
                            value={this.state.firstName}
                            placeholder="First Name"
                            onChange={this.update('firstName')}
                            />
                    </label>
                    <label>Last Name
                    <input type="text"
                            value={this.state.lastName}
                            placeholder="Last Name"
                            onChange={this.update('lastName')} />
                    </label>
                    <label>Email
                    <input type="text"
                            value={this.state.email}
                            placeholder="Email address"
                            onChange={this.update('email')} />
                    </label>
                    <label>Password
                    <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')} />
                    </label>
                    <label>Zip Code
                    <input type="text"
                            value={this.state.zipcode}
                            placeholder="Zip Code"
                            onChange={this.update('zipcode')} />
                    </label>
                    <label>Birthday
                    <input type="text"
                            value={this.state.birthdate}
                            placeholder="MM/YY/YYY"
                            onChange={this.update('birthdate')} />
                    </label>
                <button>Sign Up</button>
                {this.handleErrors()}
            </form>
            <br/>
        <Link to='/login'>Log In</Link>
            </div>
        )
    }
}

export default SessionForm;