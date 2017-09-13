import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions';

class LeftNav extends React.Component {
    constructor(props) {
        super(props);
        this.toggleClass= this.toggleClass.bind(this);
        this.state = {
            active: false,
            each: null
        };
    }

    toggleClass(each) {
        const currentState = this.state.active;
        this.setState({ active: !currentState, each:each });
    };

    ClassificationFilter(posts) {
        let classification = [];
        var tmp;
        posts.forEach(({ Classification }) => {
            if (tmp !== Classification && classification.indexOf(Classification)===-1) {
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
                    <li onClick={() => {this.toggleClass(each)}}>{each}</li>
                    <ul className={`item ${(this.state.active && this.state.each===each) ? 'hide': null}`}>
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