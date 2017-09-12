import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../../actions';


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
                    <div>
                        <label>Your Name</label>
                        <Field type="text" component="input" name="name" />
                    </div>
                    <div>
                        <label>phone(or E-mail)</label>
                        <Field type="text" component="input" name="contact" />
                    </div>
                    <div>
                        <label>comment or suggestion</label>
                        <Field type="text" component="textarea" name="comment" />
                        {/* <textarea cols="30", rows="15", style="resize:none;", name="Comment" >write some word here!</textarea> */}
                    </div>

                    <input type="submit" value="send" />
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'contactForm'
})(connect(null, actions)(withRouter(ContactForm)));