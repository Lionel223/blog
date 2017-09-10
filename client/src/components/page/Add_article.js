import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Add_article.css';
// import Add_article_field from './Add_article/Add_article_field';
import * as actions from '../../actions';

class Add_article extends React.Component {
    renderClassification(props) {
        return ['HTML', 'Javascript', 'Node', 'Linux', 'Database', 'test'].map((classification) => {
            return (
                <span key={classification}>
                    <Field
                        name='classification'
                        component="input"
                        type="radio"
                        value={classification}
                    />
                    {' '}
                    {classification}
                    {' '}
                </span>
            );
        });
    }

    onSubmit(values) {
        const { history } = this.props;
        this.props.addArticle(values, history);
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="form">
                <h2>Add article</h2>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <label>Select a classification</label>
                    {this.renderClassification()}
                    <h2>
                        <Field type="text" component="input" name="topic" placeholder="Topic" />
                    </h2>

                    <Field type="text" component="textarea" name="content"></Field>

                    <input type="submit" value="save" />
                </form>

            </div>
        );
    }
}

function validate(values) {
    const errors = {};
    ['classification', 'topic', 'content'].forEach(name => {
        if (!values[name]) {
            errors[name] = `You should provide ${name}`;
        }
    });
    return errors;
}

export default reduxForm({
    validate,
    form: 'addArticleForm'
})(
    connect(null, actions)(withRouter(Add_article))
    )
