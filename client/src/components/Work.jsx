import React from 'react';

class Work extends React.Component{
    render(){
        return(
            <div id = 'portfolio' className = 'silver'>
                <img className = 'header' src = {this.props.work} alt = 'contact header' />
                <section>
                    <article className = 'project'>
                        <div>
                            <a href = 'https://clinicafurelos.herokuapp.com/' target = '_blank'>
                                <img className = 'portfolio_img' src = {require('../images/portfolio2.png')} alt = '' />
                            </a>
                        </div>
                        <div className = 'project_about'>
                            <h4>Furelos Clinic</h4>
                            <p>
                                This is a full stack web application made with the purpose of connecting users
                                to their physician. This app accomplishes this by offering live
                                video conference services as well as the ability to share files, make appointments, and update 
                                information in real time. 
                                <br />
                                <a href = 'https://github.com/davidgrunblatt/medicalOnline' target = '_blank'>
                                    <img className = 'github' src = {require('../images/github.png')} alt = 'github' />
                                </a>
                                <a href = 'https://clinicafurelos.herokuapp.com/' target = '_blank'>
                                    <img id = 'arrow' className = 'github' src = {require('../images/goto.png')} alt = 'visit page' />
                                </a>
                            </p>
                            <ul>
                                <li><span>Features: </span></li>
                                <li className = 'badge'>Live video chat</li>
                                <li className = 'badge'>JWT Authentication</li>
                                <li className = 'badge'>Account registration - CRUD operations</li>
                                <li className = 'badge'>File uploads</li>
                                <li className = 'badge'>Appointment maker</li>
                                <li className = 'badge'>Email correspondence</li>
                            </ul>
                            <ul>
                                <li><span>Technologies used:</span> </li>
                                <li className = 'badge'>CSS</li>
                                <li className = 'badge'>SCSS</li>
                                <li className = 'badge'>React.js</li>
                                <li className = 'badge'>JavaScript</li>
                                <li className = 'badge'>Node.js</li>
                                <li className = 'badge'>Express.js</li>
                                <li className = 'badge'>JSON Web Tokens</li>
                                <li className = 'badge'>Twilio</li>
                                <li className = 'badge'>Axios</li>
                                <li className = 'badge'>MongoDB</li>
                                <li className = 'badge'>Mongoose</li>
                                <li className = 'badge'>Heroku</li>
                            </ul>
                        </div>
                    </article>
                </section>
                
                {/* SECOND PROJECT SECTION  */}
                <section>
                    <article className = 'project'>
                        <div>
                            <a href = 'https://cms-react.herokuapp.com/' target = '_blank'>
                                <img className = 'portfolio_img' src = {require('../images/crimpy2.png')} alt = '' />
                            </a>
                        </div>
                        <div className = 'project_about'>
                            <h4>React Content Management System</h4>
                            <p>
                                This is a template website built with React.js that allows users to login 
                                and customize the content of their theme without the need to code. 
                                <br />
                                <a href = 'https://github.com/davidgrunblatt/frontEndShowcase' target = '_blank'>
                                    <img className = 'github' src = {require('../images/github.png')} alt = 'github' />
                                </a>
                                <a href = 'https://cms-react.herokuapp.com/' target = '_blank'>
                                    <img id = 'arrow' className = 'github' src = {require('../images/goto.png')} alt = 'visit page' />
                                </a>
                            </p>
                            <ul>
                                <li><span>Features: </span></li>
                                <li className = 'badge'>Codeless content management and customizability</li>
                                <li className = 'badge'>JWT Authentication</li>
                                <li className = 'badge'>Account registration - CRUD operations</li>
                                <li className = 'badge'>Image uploads</li>
                            </ul>
                            <ul>
                                <li><span>Technologies used:</span> </li>
                                <li className = 'badge'>SCSS</li>
                                <li className = 'badge'>React.js</li>
                                <li className = 'badge'>JavaScript</li>
                                <li className = 'badge'>Node.js</li>
                                <li className = 'badge'>Express.js</li>
                                <li className = 'badge'>JSON Web Tokens</li>
                                <li className = 'badge'>Axios</li>
                                <li className = 'badge'>MongoDB</li>
                                <li className = 'badge'>Mongoose</li>
                                <li className = 'badge'>Heroku</li>
                            </ul>
                        </div>
                    </article>
                </section>

                {/* YOUTUBE  */}
                <section>
                    <article className = 'project'>
                        <div>
                            <a href = 'https://www.youtube.com/channel/UCIgQiUUnFxBADKfzKh0S99g?view_as=subscriber' target = '_blank'>
                                <img className = 'portfolio_img' src = {require('../images/youtube.png')} alt = '' />
                            </a>
                        </div>
                        <div className = 'project_about'>
                            <h4>Youtube coding tutorials</h4>
                            <p>
                                This is my youtube channel in which I aim to make web development accessible to all
                                by providing in depth step by step instruction on web development
                                fundamentals such as CSS, Responsive Design, JavaScript, etc.
                                <br />
                                <a href = 'https://www.youtube.com/channel/UCIgQiUUnFxBADKfzKh0S99g?view_as=subscriber' target = '_blank'>
                                    <img id = 'arrow' className = 'github' src = {require('../images/goto.png')} alt = 'visit page' />
                                </a>
                            </p>
                        </div>
                    </article>
                </section>
            </div>
        )
    }
}

export default Work; 
