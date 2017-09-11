import React from 'react';
import { connect } from 'react-redux';

class RightPage extends React.Component {
    render() {
        const { singlePost } = this.props;
        // console.log(singlePost);
        // return (<div className="main">aaa</div>);
        console.log(this.props.singlePost);
        if (!singlePost) {
            return (
                <div className="main">Select an article</div>
            );
        }
        return (
            <div className="main">
                <p style={{float: "right"}}>
                    <a href="/users/modify" style={{textDecoration:"none"}}>
                        edit
                    </a>
                    /
                    <a href="/apis/delete" style={{textDecoration:"none"}}>
                        delete
                    </a>
                    {' '}this article
                </p>

                <h1>{singlePost.Topic}</h1>
                <div style={{textAlign: "left"}}>
                    {singlePost.Article}
                </div>
                <p style={{textAlign:"right"}}>
                    {singlePost.CreateDate}
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { singlePost: state.singlePost };
}

export default connect(mapStateToProps)(RightPage);