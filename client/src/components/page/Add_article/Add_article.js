import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Add_article.css';

import * as actions from '../../../actions';

import renderClassification from './Add_article_field/renderClassification';
import renderTopic from './Add_article_field/renderTopic';
import renderContent from './Add_article_field/renderContent';

class Add_article extends React.Component {

    onSubmit(values) {
        const { history } = this.props;
        this.props.addArticle(values, history);
    }

    render() {
        const { handleSubmit, auth } = this.props;

        if (!auth) {
            return <div></div>;
        }
        return (
            <div className="form">
                <h2>Add article</h2>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <label>Select a classification</label>
                    <Field
                        name="classification"
                        component={renderClassification}
                        options={[
                            'HTML', 'Javascript', 'Node', 'Linux', 'Database', 'test'
                        ]}
                        required={true}
                    />

                    <h2>
                        <Field
                            name="topic"
                            type="text"
                            component={renderTopic}
                        />
                    </h2>

                    <Field
                        name="content"
                        type="text"
                        component={renderContent}
                    />

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

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

export default reduxForm({
    validate,
    form: 'addArticleForm'
})(
    connect(mapStateToProps, actions)(withRouter(Add_article))
    )
