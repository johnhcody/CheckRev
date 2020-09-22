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

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    render() {
        // debugger
        const { formType, formText } = this.props;
        // debugger
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <h3>{formText} Form</h3>
                    <label>First Name
                    <input type="text"
                            value={this.state.firstName}
                            onChange={this.update('firstName')}
                            />
                    </label>
                    <label>Last Name
                    <input type="text"
                            value={this.state.lastName}
                            onChange={this.update('lastName')} />
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
                    <label>Birthday
                    <input type="text"
                            value={this.state.birthdate}
                            onChange={this.update('birthdate')} />
                    </label>
        <button value={formType}>Sign Up</button>
            </form>
        <Link to='/login'>Log In</Link>
            </div>
        )
    }
}

export default SessionForm;