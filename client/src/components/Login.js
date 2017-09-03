import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { loginUser } from '../actions';


class Login extends React.Component {
    renderUsernameField(field) {
        return (
            <div>
                <label>username</label>
                <input
                    type="text"
                    {...field.input}
                />
            </div>
        );
    }
    renderPasswordField(field) {
        return (
            <div>
                <label>Password</label>
                <input
                    type="password"
                    {...field.input}
                />
            </div>
        );
    }

    // onSubmit(values) {
    //     this.props.loginUser(values, () => {
    //         this.props.history.push('/contact');
    //     });
    // }

    onSubmit(values) {
        this.props.loginUser(values);
    }


    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    name="username"
                    value="test"
                    component={this.renderUsernameField}
                />
                <Field
                    name="password"
                    component={this.renderPasswordField}
                />
                <button type="submit">Submit</button>
            </form>
        );
    }
}
export default reduxForm({
    form: 'loginForm'
})(
    connect(null,{loginUser})(Login)
);