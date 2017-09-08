import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { loginUser } from '../../actions';
import './Login.css';

class Login extends React.Component {
    renderUsernameField(field) {
        return (
            <div>
                <p>
                    <label>Username</label>
                    <input
                        type="text"
                        {...field.input}
                    />
                </p>
            </div>
        );
    }
    renderPasswordField(field) {
        return (
            <div>
                <p>
                    <label>Password</label>
                    <input
                        type="password"
                        {...field.input}
                    />
                </p>
            </div>
        );
    }
    
    onSubmit(values) {
        const {history} = this.props;
        this.props.loginUser(values,history);
        // this.props.history.push('/');
    }


    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="Login_Form">
                <h2>Login</h2>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        name="username"
                        component={this.renderUsernameField}
                    />
                    <Field
                        name="password"
                        component={this.renderPasswordField}
                    />
                    {/* <button type="submit">Submit</button> */}
                    <input type="submit" value="sign in" />
                </form>
            </div>
        );
    }
}
export default reduxForm({
    form: 'loginForm'
})(
    connect(null, { loginUser })(withRouter(Login))
    );