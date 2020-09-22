import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
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
        const { formType, formText, linkTarget, linkText } = this.props;
        // debugger
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <h3>{formText} Form</h3>
                <label>Email
                    <input type="text" 
                    value={this.state.email}
                    onChange={this.update('email')}/>
                </label>
                <label>Password
                    <input type="password" 
                    value={this.state.password}
                    onChange={this.update('password')}/>
                </label>
        <button value={formType}>{formText}</button>
            </form>
        <Link to={linkTarget}>{linkText}</Link>
            </div>
        )
    }
}

export default SessionForm;