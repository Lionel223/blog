import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'

import Header from './Header';
import Footer from './Footer';

import Login from './page/Login';
import Home from './page/Home';
import About from './page/About';
import Contact from './page/Contact';
import Tutorial from './page/Tutorial';
import Add_article from './page/Add_article';


class App extends React.Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        return (
            <div>
                <BrowserRouter forceRefresh>
                    <div>
                        <Header />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/tutorial" component={Tutorial} />
                        <Route exact path="/add_article" component={Add_article}/>
                        {/* <Route exact path="/tutorial/:id" component={Article} /> */}
                        <Footer />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);