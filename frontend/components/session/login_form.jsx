import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault(e);
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    render() {
        // debugger
        const { formType, formText, linkTarget, linkText, firstName, lastName, email, password, zipcode, birthdate } = this.props;
        // debugger
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3>{formText} Form</h3>
                    <label>First Name
                    <input type="text"
                            value={this.state.firstName}
                            onChange={this.update('email')} />
                    </label>
                    <label>Last Name
                    <input type="text"
                            value={this.state.lastName}
                            onChange={this.update('email')} />
                    </label>
                    <label>Email
                    <input type="text"
                            value={this.state.email}
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
                            onChange={this.update('zipcode')} />
                    </label>
                    <button value={formType}>{formText}</button>
                </form>
                <Link to={linkTarget}>Sign Up</Link>
            </div>
        )
    }
}

export default LoginForm;
