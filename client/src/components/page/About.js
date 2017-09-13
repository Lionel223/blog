import React from 'react';
import './About.css';

class About extends React.Component {
    render() {
        return (
            <div className="introduction">
                <h2>About me</h2>   
                <h3>Skill</h3>
                <ul>
                    <li>Programming Language: HTML、CSS、Javascript(ES5/ES6)、node.js</li>
                    <li>Frontend Framework: React.js</li>
                    <li>Backend Framwork: Express.js</li>
                    <li>Database: MongoDB</li>
                    <li>Version Control: Git/GitHub、SVN</li>
                    <li>Exprence in AWS(EC2, S3, Lambda)</li>
                    <li>Experience with unit test(Mocha)  </li>
                </ul>
                <hr />
                <h3>學歷</h3>
                <table>
                    <tbody>
                        <tr>
                            <th>學歷</th>
                            <th>學校名稱</th>
                            <th>系所</th>
                            <th>時間</th>
                        </tr>
                        <tr>
                            <th>碩士</th>
                            <th>國立中興大學</th>
                            <th>物理所 畢業</th>
                            <th>2013/9~2015/6</th>
                        </tr>
                        <tr>
                            <th>學士</th>
                            <th>國立高雄師範大學</th>
                            <th>物理學系 畢業</th>
                            <th>2009/9~2013/6</th>
                        </tr>
                        <tr>
                            <th>高中</th>
                            <th>台中一中</th>
                            <th></th>
                            <th>2006/9~2009/6</th>
                        </tr>
                    </tbody>
                </table>
                <hr />
                <h3>作品</h3>
                <p><a href="http://54.64.88.220/">個人部落格</a></p>
                <hr />
                <h3>我的網站</h3>
                <p>GitHub: <a href="https://github.com/Lionel223">https://github.com/Lionel223</a></p>
                <hr />
                <h3>興趣</h3>
                <ul>
                    <li>程式技術學習、實作，目前專注在加深javascript、node.js的了解，並期望之後能學習其他語言</li>
                    <li>攝影</li>
                    <li>閱讀</li>
                </ul>
            </div >
        );
    }
}

export default About;