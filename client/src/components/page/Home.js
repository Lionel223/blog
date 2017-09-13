import React from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

import './Home.css';

class Home extends React.Component {
    componentDidMount() {
        this.props.fetchPost();
    }

    renderHomePage() {
        return this.props.posts.map(post => {
            return (
                <div className="main_article" key={post._id}>
                    <h3>{post.Topic}<span>{moment(post.CreateDate).format('MMM Do YYYY, h:mm a')}</span></h3>
                    <div className="article" dangerouslySetInnerHTML={{__html: post.Article}}></div>
                    <div className="classification">{post.Classification}</div>
                    <a onClick={() => this.specifyPost(post)}>Read More</a>
                </div>
            );
        })
    }
    specifyPost(post) {
        const { history } = this.props;
        history.push('/tutorial');
        this.props.selectPost(post,history);
    }

    render() {
        if (!this.props.posts) {
            return (
                <p className="main_page">wait...</p>
            );
        }

        return (
            <div className="main_page">
                {this.renderHomePage()}
                <br /><br />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.post };
}

export default connect(mapStateToProps, actions)(withRouter(Home));