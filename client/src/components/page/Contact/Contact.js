import React from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import ContactPage from './ContactPage';
import ContactForm from './ContactForm';
import * as actions from '../../../actions';

import './ContactForm.css';

class Contact extends React.Component {



    render() {
        const {auth } = this.props;
        switch(auth){
            case null:
                return <div>wait</div>;
            case false:
                return <ContactForm />
            default:
            return <ContactPage />
        }        
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
    };
}

export default connect(mapStateToProps, actions)(Contact);