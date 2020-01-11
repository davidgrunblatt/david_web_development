import React from 'react';
import construction from '../images/coming-soon.jpg'; 

class Work extends React.Component{
    render(){
        return(
            <div id = 'portfolio'>
                <img className = 'header' src = {require('../images/work.png')} alt = 'contact header' />
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
                                to their physicians. This app accomplishes this by offering live
                                video conference services as well as the ability to share files and update 
                                information in real time. 
                                <br />
                                <a href = 'https://github.com/davidgrunblatt/medicalOnline' target = '_blank'>
                                    <img className = 'github' src = {require('../images/github.png')} alt = 'github' />
                                </a>
                                <a href = 'https://clinicafurelos.herokuapp.com/' target = '_blank'>
                                    <img className = 'github' src = {require('../images/goto.png')} alt = 'visit page' />
                                </a>
                            </p>
                            <ul>
                                <li><span>Features: </span></li>
                                <li className = 'badge'>JWT Authentication</li>
                                <li className = 'badge'>Live video chat using Twilio API</li>
                                <li className = 'badge'>Account registration - CRUD operations</li>
                                <li className = 'badge'>File uploads</li>
                                <li className = 'badge'>Email correnspondence</li>
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
                            <a href = 'https://crimpy.herokuapp.com/' target = '_blank'>
                                <img id = 'crimpyIMG' className = 'portfolio_img' src = {require('../images/crimpy.png')} alt = '' />
                            </a>
                        </div>
                        <div className = 'project_about'>
                            <h4>Touchstone Climbing</h4>
                            <p>
                                This is a rock climbing training app in which users can keep track of their progress, share 
                                with friends, and complete training packs. 
                                <br />
                                <a href = 'https://github.com/davidgrunblatt/Crimpy' target = '_blank'>
                                    <img className = 'github' src = {require('../images/github.png')} alt = 'github' />
                                </a>
                                <a href = 'https://crimpy.herokuapp.com/' target = '_blank'>
                                    <img className = 'github' src = {require('../images/goto.png')} alt = 'visit page' />
                                </a>
                            </p>
                            <ul>
                                <li><span>Features: </span></li>
                                <li className = 'badge'>JWT Authentication</li>
                                <li className = 'badge'>Account registration - CRUD operations</li>
                                <li className = 'badge'>File uploads</li>
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
                {/* SECOND PROJECT SECTION  */}
                <section>
                    <article className = 'project'>
                        <div>
                            <a href = 'https://crimpy.herokuapp.com/' target = '_blank'>
                                <img id = 'crimpyIMG' className = 'portfolio_img' src = {construction} alt = '' />
                            </a>
                        </div>
                    </article>
                </section>
            </div>
        )
    }
}

export default Work; 
