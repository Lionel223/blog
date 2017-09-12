import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import * as actions from '../../../actions'
import moment from 'moment';


class RightPage extends React.Component {
    deletePost(id){
        this.props.deletePost(id);
        this.props.history.push('/');
    }

    render() {
        const { singlePost } = this.props;
        if (!singlePost) {
            return (
                <div className="main">Select an article</div>
            );
        }
        return (
            <div className="main">
                <div className="top">
                    <a href="/users/modify" style={{textDecoration:"none"}}>
                        edit
                    </a>
                    /
                    <a onClick={()=> this.deletePost(singlePost._id)} style={{textDecoration:"none"}}>
                        delete
                    </a>
                    {' '}this article
                </div>

                <h1>{singlePost.Topic}</h1>
                <div style={{textAlign: "left"}}>
                    {singlePost.Article}
                </div>
                <p style={{textAlign:"right"}}>
                    {moment(singlePost.CreateDate).format('MMM Do YYYY, h:mm a')}
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { singlePost: state.singlePost };
}

export default withRouter(connect(mapStateToProps,actions)(RightPage));