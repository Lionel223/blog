import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions';

import LeftNav from './Left_nav';
import RightPage from './RightPage';

import './Tutorial.css';

class Tutorial extends React.Component {
    componentDidMount() {
        this.props.fetchPost();
    }

    render() {
        if(!this.props.posts) {
            return (
                <div className="tutorial">wait...</div>
            )
        }
        return (
            <div className="tutorial">
                <LeftNav posts={this.props.posts} />
                <RightPage />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { 
        posts: state.post
    };
}

export default connect(mapStateToProps, actions)(Tutorial);
