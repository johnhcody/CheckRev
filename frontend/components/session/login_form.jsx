import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import NavBar from '../navbar/navbar';

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
        const { login } = this.props;
        e.preventDefault(e);
        const user = Object.assign({}, this.state);
        login(user);
        return <Redirect to={'/'} />
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }


    handleErrors() {
        return(
            <ul>
                {this.props.errors.map((error, idx) => {
                    return <li className="form-container-error" key={idx}>{error}</li>
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
            return (
                <div>
                <NavBar />
                <div className="form-wrap-all">
                    <div className="form-container">
                        <div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="login-title">
                            <h2>Log In to CheckRev</h2>
                            </div>
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
                        <div className="form-footer">
                            <p>Don't have CheckRev account? You can sign up <Link to='/signup' style={{ textDecoration: 'none', color: '#E33258' }}>here</Link></p>
                        </div>
                        </form>
                        </div>
                    </div>
                    <div className="red-carpet">
                        <img src={window.redCarpet} />
                    </div>
                </div>
                </div>
            )
        
    }
}

export default LoginForm;
