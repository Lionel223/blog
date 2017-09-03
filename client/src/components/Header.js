import React from 'react';
import { connect } from 'react-redux';


class Header extends React.Component {
    isLogin() {
        console.log(this.props.auth);
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return ([
                    <li key='1' className="loginLink"><a href="/login">sign in</a></li>,
                    <li key='2' className="name">Welcome!{this.props.auth}</li>
                ]);
            default:
                return ([
                    <li key='1' className="addLink"><a href="/users/add_article">add article</a></li>,
                    <li key='2' className="loginLink"><a href="/api/logout">sign out</a></li>
                ]);
        }
    }

    render() {
        return (
            <header>
                <ul className="navbar">
                    <li><a href="/" className="homeLink">home</a></li>
                    <li><a href="/about" className="aboutLink">about</a></li>
                    <li><a href="/contact" className="contactLink">contact</a></li>
                    <li><a href="/tutorial" className="tutorialLink">tutorial</a></li>
                    {/*<li class="more"><img src="../images/icon/down.svg" />></li>*/}
                    {this.isLogin()}
                </ul>

                {/* RWD */}
                {/* <ul className="drop_down slide_nav"> */}
                {/* <li className="more_nav"><a href="/users/signout">sign out</a></li> */}
                {/* <li className="more_nav"><a href="/users/add_article">add article</a></li> */}
                {/* <li className="more_nav"><a href="/users/signin">sign in</a></li> */}
                {/* </ul> */}

                <div className="head_description">
                    <h1><a href="/">Lionel's blog</a></h1>
                </div>
            </header>
        );
    }
}

function mapStateToProps(state) {
    return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);