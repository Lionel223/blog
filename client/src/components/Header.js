import React from 'react';
import { connect } from 'react-redux';
import { Link,NavLink,withRouter } from 'react-router-dom';
import * as actions from '../actions';
import './Header.css';

class Header extends React.Component {
    isLogin() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li key='1' className="loginLink"><NavLink to="/login">sign in</NavLink></li>
                );
            default:
                return ([
                    <li key='1' className="loginLink"><a href="/api/logout">sign out</a></li>,                    
                    <li key='2' className="addLink"><NavLink to="/add_article">add article</NavLink></li>,
                    <li key='3' className="name">Welcome!{this.props.auth.username}</li>
                ]);
        }
    }

    render() {
        return (
            <header>
                <ul className="navbar">
                    <li><NavLink to='/' exact className="homeLink">home</NavLink></li>
                    <li><NavLink to='/about' exact className="aboutLink">about</NavLink></li>
                    <li><NavLink to='/contact' exact className="contactLink">contact</NavLink></li>
                    <li><NavLink to='/tutorial' exact className="tutorialLink">tutorial</NavLink></li>
                    {/*<li class="more"><img src="../images/icon/down.svg" />></li>*/}
                    {this.isLogin()}
                </ul>

                {/* RWD */}
                {/* <ul className="drop_down slide_nav"> */}
                {/* <li className="more_nav"><a href="/users/signout">sign out</a></li> */}
                {/* <li className="more_nav"><a href="/users/add_article">add article</a></li> */}
                {/* <li className="more_nav"><a href="/users/signin">sign in</a></li> */}
                {/* </ul> */}
                
                <div className={`head_description ${this.props.location.pathname==="/tutorial"?'hide':''}`}>
                    <h1><Link to="/">Lionel's blog</Link></h1>
                </div>
            </header>
        );
    }
}

function mapStateToProps(state) {
    return { auth: state.auth };
}

export default withRouter(connect(mapStateToProps,actions)(Header));