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
                    return <li className="login-form-container-error" key={idx}>{error}</li>
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
                <div className="login-form-container">
                        <div className="login-form-container-inputs">
                        <form onSubmit={this.handleSubmit} className="login-form">
                            <h3>Log In to CheckRev</h3>
                            <br/>
                            <label>
                            <input type="text"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.update('email')} />
                            </label>
                            <br/>
                            <label>
                            <input type="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.update('password')} />
                            </label>
                            <br/>
                            <button>Log In</button>
                            {this.handleErrors()}
                        <br/>
                                <p>Are you not yet on CheckRev? You can sign up <Link to='/signup' style={{ textDecoration: 'none', color: '#E33258' }}>here</Link></p>
                        </form>
                        </div>
                </div>
                </div>
            )
        
    }
}

export default LoginForm;
