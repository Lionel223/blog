import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions';

class LeftNav extends React.Component {

    ClassificationFilter(posts) {
        let classification = [];
        var tmp;
        posts.forEach(({ Classification }) => {
            if (tmp !== Classification) {
                tmp = Classification;
                classification.push(Classification);
            }
        })
        return classification;
    }

    renderLeftBar(classification) {
        return classification.map(each => {
            return (
                <div key={each} className="reveal">
                    <li>{each}</li>
                    <ul>
                        {this.renderSort(each)}
                    </ul>
                </div>
            );
        })
    }

    renderSort(each){
        return this.props.posts.map((post)=> {
            if(each === post.Classification){
                return (
                    <li
                        key={post._id}
                        onClick={() => this.props.selectPost(post)}
                    >
                        {post.Topic}
                    </li>
                )
            }
            return null;
        }) 
    }


    render() {
        const { posts } = this.props;
        const classification = this.ClassificationFilter(posts);
        return (
            <div className="left_nav">
                <ul className="left_bar">
                    {this.renderLeftBar(classification)}
                </ul>
            </div>
        );
    }
}

export default connect(null,actions)(LeftNav);