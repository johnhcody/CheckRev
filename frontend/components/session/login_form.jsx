import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import NavBar from '../navbar/navbar';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        // debugger
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit(e) {
        const { login } = this.props;
        e.preventDefault(e);
        debugger
        // this.handleErrors();
        const user = Object.assign({}, this.state);
        debugger
        login(user);
        return <Redirect to={'/'} />
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }


    handleErrors() {
        debugger
        return(
            <ul>
                {this.props.errors.map((error, idx) => {
                    return <li key={idx}>{error}</li>
                })}
            </ul>
        )
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    render() {
        debugger
            return (
                <div>
                    <NavBar />
                    <form onSubmit={this.handleSubmit}>
                        <h3>Log In Form</h3>
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
                        <button>Log In</button>
                        {this.handleErrors()}
                    </form>
                    <Link to='/signup'>Sign Up</Link>
                </div>
            )
        
    }
}

export default LoginForm;
