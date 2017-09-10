import React from 'react';
import { reduxForm } from 'redux-form';

class Contact extends React.Component {

    onSubmit(values) {
        console.log(values);
    }

    render() {
        const { handleSubmit } = this.props
        return (
            <div className="form">
                <h2>Contact me</h2>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <p>
                        {/* <Field></Field> */}
                        <label>Your Name</label>
                        <input type="text" name="Name" />
                    </p>
                    <p>
                        <label>phone(or E-mail)</label>
                        <input type="text" name="Contact" />
                    </p>
                    <p>
                        <label>leave some comment or what you want to say</label>
                        {/* <textarea cols="30", rows="15", style="resize:none;", name="Comment" >write some word here!</textarea> */}
                    </p>
                    <p>
                        <input type="submit" value="send" />
                    </p>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'contactForm'
})(Contact);