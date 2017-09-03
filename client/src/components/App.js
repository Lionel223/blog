import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'


import Header from './Header';
import Footer from './Footer';
// import Content from './Content';
// import Footer from './Footer';

import Login from './Login';

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Contact = () => <h2>Contact</h2>;
const Tutorial = () => <h2>Tutorial</h2>;
const Article = () => <h2>Article</h2>;



class App extends React.Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/tutorial" component={Tutorial} />
                        <Route exact path="/tutorial/:id" component={Article} />
                        <Footer />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);