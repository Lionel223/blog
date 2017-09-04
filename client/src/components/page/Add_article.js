import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
// import {} from '../../actions';
import stylesheet from './Add_article.css';
// const  { DOM: { input, select, textarea } } = React

class Add_article extends React.Component {


    onSubmit(values) {
        console.log(values);
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="form">
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                <h2>Add article</h2>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <p>
                        <span>Select a classification</span>
                        <Field name="Classification" component="input" type="radio" value="HTML" />
                        {' '}
                        HTML
                        <Field name="Classification" component="input" type="radio" value="Javascript" />
                        {' '}
                        Javascript
                        <Field name="Classification" component="input" type="radio" value="Node" />
                        {' '}
                        Node
                        <Field name="Classification" component="input" type="radio" value="Linux" />
                        {' '}
                        Linux
                        <Field name="Classification" component="input" type="radio" value="Database" />
                        {' '}
                        Database
                        <Field name="Classification" component="input" type="radio" value="test" />
                        {' '}
                        test
                    </p>
                    <h2>
                        <Field type="text" component="input" name="Topic" placeholder="Topic標題" />
                    </h2>
                    <p>
                        <Field type="text" component="textarea" name="Content"></Field>
                    </p>
                    <input type="submit" value="save" />
                </form>

            </div>
        );
    }
}

export default reduxForm({
    form: 'addForm'
})(
    connect(null, {})(Add_article)
    )
