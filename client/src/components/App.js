import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
// import Content from './Content';
// import Footer from './Footer';

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Contact = () => <h2>Contact</h2>;
const Tutorial = () => <h2>Tutorial</h2>;
const Article = () => <h2>Article</h2>;


const App = () => {
    return (
        <div>
            <BrowserRouter>
            <div>
                <Header />
                <Route exact path="/" component={Home} />
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

export default App;