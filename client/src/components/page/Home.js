import React from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import './Home.css'

class Home extends React.Component {
    componentDidMount() {
        this.props.fetchPost();
    }

    renderHomePage() {
        return this.props.posts.map(blog => {
            return (
                <div className="main_article" key={blog._id}>
                    <h3>{blog.Topic}<span>{blog.CreateDate}</span></h3>
                    <div className="article">{blog.Article}</div>
                        <div className="classification">{blog.Classification}</div>
                        <a href={`/tutorial/${blog._id}`}>Read More</a>
                </div>
            );
        })

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

export default connect(mapStateToProps, actions)(Home);