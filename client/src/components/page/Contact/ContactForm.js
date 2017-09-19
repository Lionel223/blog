import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../../actions';
import renderField from './ContactField';
import renderField_textarea from './ContactField_textarea';


class ContactForm extends React.Component{
    
    onSubmit(values) {
        const { history } = this.props;
        this.props.saveComment(values, history);
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="contactForm">
                <h2>Contact me</h2>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field 
                        name="name"
                        type="text"
                        component={renderField}
                        label="Your Name"
                    />
                    <Field 
                        name="contact"
                        type="text"
                        component={renderField}
                        label="phone(or E-mail)"
                    />
                    <Field 
                        name="comment"
                        type="text"
                        component={renderField_textarea}
                        label="comment or suggestion"
                    />
                    {/* <div>
                        <label>comment or suggestion</label>
                        <Field type="text" component="textarea" name="comment" />
                        <textarea cols="30", rows="15", style="resize:none;", name="Comment" >write some word here!</textarea>
                    </div> */}

                    <input type="submit" value="send" />
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};
    ['name', 'contact', 'comment'].forEach(name => {
        if (!values[name]) {
            errors[name] = `You should provide ${name}`;
        }
    });
    return errors;
}

export default reduxForm({
    validate,
    form: 'contactForm'
})(connect(null, actions)(withRouter(ContactForm)));