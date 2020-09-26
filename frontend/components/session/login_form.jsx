import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import NavBar from '../navbar/navbar';
import Copyright from '../splash/copyright';
import Footer from '../splash/footer';

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
        return (
            <div>
            <NavBar />
            <div className="handle-errors-wrapper">
                <div className="handle-errors">
             {this.handleErrors()}
                </div>
            </div>
                <div className="form-wrap-all">
                    <div className="form-container">
                        <div>
                            <div className="login-form-text">
                                <h2>Log In to CheckRev</h2>
                                <p>New to CheckRev? <Link to='/signup'> Sign Up!</Link></p>
                            </div>
                                    <form onSubmit={this.handleSubmit}>
                            <label>
                            <input type="text"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.update('email')} />
                            </label>

                            <label>
                            <input type="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.update('password')} />
                            </label>

                            <button>Log In</button>
                            

                        <div className="form-footer">
                            <p>No account? You can sign up <Link to='/signup' style={{ textDecoration: 'none', color: '#E33258' }}>here</Link></p>
                        </div>
                        </form>
                        </div>
                    </div>
                    <div className="red-carpet">
                        <img src={window.redCarpet} />
                    </div>
                </div>
                <Footer />
                <Copyright />

                </div>
            )
        
    }
}

export default LoginForm;
