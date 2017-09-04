import React from 'react';
import './Footer.css';
import githubMark from './GitHub-Mark-Light.png';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer>
                    <p>Copyright © 2017 Lionel</p>
                    <a href="https://github.com/Lionel223">
                        <img alt="" src={githubMark} />
                    </a>
                </footer>
            </div>
        );
    }
}

export default Footer;