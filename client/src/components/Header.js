import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header>
                <ul className="navbar">
                    <li className="homeLink">home</li>
                    <li><a href="/about" className="aboutLink">about</a></li>
                    <li><a href="/contact" className="contactLink">contact</a></li>
                    <li><a href="/tutorial" className="tutorialLink">tutorial</a></li>
                    {/*<li class="more"><img src="../images/icon/down.svg" />></li>*/}
                    <li className="loginLink"><a href="/users/signout">sign out</a></li>
                    <li className="name">Welcome!</li>
                    <li className="addLink"><a href="/users/add_article">add article</a></li>
                    <li className="loginLink"><a href="/users/signin">sign in</a></li>
                </ul>
                <ul className="drop_down slide_nav">
                    <li className="more_nav"><a href="/users/signout">sign out</a></li>
                    <li className="more_nav"><a href="/users/add_article">add article</a></li>
                    <li className="more_nav"><a href="/users/signin">sign in</a></li>
                </ul>

                <div className="head_description">
                    <h1><a href="/">Lionel's blog</a></h1>
                </div>
            </header>
        );
    }
}

export default Header;