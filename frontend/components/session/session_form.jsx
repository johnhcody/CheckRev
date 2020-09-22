import React from 'react';


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
        e => this.setState({[field]: e.target.value})
    }
    
    formText() {
        (this.props.formType === 'signup') ? 'Sign Up' : 'Log In'
    }

    linkTarget() {
        (this.props.formType === 'signup') ? '/login' : '/signup'
    }

    render() {
        const { formtype } = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>{this.formText} Form</h3>
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
        <button value={formType}>{this.formText}</button>
            </form>
        )
    }
}

export default SessionForm;