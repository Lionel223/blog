import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import * as actions from '../../../actions';

import './ContactPage.css';

class ContactPage extends React.Component {
    componentDidMount() {
        this.props.fetchComment();
    }

    renderContactPage(comment) {
        return comment.map(({ _id, Name, Contact, Comment, CreateDate }) => {
            return (
                <div className="page" key={_id}>
                    <h3>Name: <span>{Name}</span></h3>
                    <h3>Contact: <span>{Contact}</span></h3>
                    <h3>Comment: <span>{Comment}</span></h3>
                    <h3>Date: <span>{moment(CreateDate).format('MMM Do YYYY, h:mm a')}</span></h3>
                </div>
            );
        })
    }

    render() {
        const { comment } = this.props;
        if (!comment) {
            return <div>wait...</div>
        }
        return (
            <div className="contactPage">
                {this.renderContactPage(comment)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        comment: state.comment
    };
}

export default connect(mapStateToProps, actions)(ContactPage);