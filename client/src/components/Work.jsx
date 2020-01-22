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
                                to their physicians. This app accomplishes this by offering live
                                video conference services as well as the ability to share files and update 
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
                            <a href = 'https://touchstoneclimbing.herokuapp.com/' target = '_blank'>
                                <img className = 'portfolio_img' src = {require('../images/crimpy2.png')} alt = '' />
                            </a>
                        </div>
                        <div className = 'project_about'>
                            <h4>Touchstone Climbing</h4>
                            <p>
                                This is a rock climbing training application which seeks to empower
                                users to reach their climbing goals. This application allows users to keep track of their
                                progress via a social media like timeline in which they can post notes and images of all their
                                sessions. Users can also complete interactive training packs which focus on technique, strength, and endurance, 
                                all essential tools for a climber. 
                                <br />
                                <a href = 'https://github.com/davidgrunblatt/Crimpy' target = '_blank'>
                                    <img className = 'github' src = {require('../images/github.png')} alt = 'github' />
                                </a>
                                <a href = 'https://touchstoneclimbing.herokuapp.com/' target = '_blank'>
                                    <img id = 'arrow' className = 'github' src = {require('../images/goto.png')} alt = 'visit page' />
                                </a>
                            </p>
                            <ul>
                                <li><span>Features: </span></li>
                                <li className = 'badge'>JWT Authentication</li>
                                <li className = 'badge'>Account registration - CRUD operations</li>
                                <li className = 'badge'>Social media like timeline</li>
                                <li className = 'badge'>Image uploads</li>
                                <li className = 'badge'>Interactive training games</li>
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
                {/* THIRD PROJECT SECTION  */}
                <section>
                    {/* <article className = 'project'>
                        <div>
                            <a href = 'https://wrestlemania-game.netlify.com/' target = '_blank'>
                                <img id = 'crimpyIMG' className = 'wrestlemania_img portfolio_img' src = {require('../images/portfolio3.png')} alt = '' />
                            </a>
                        </div>
                        <div className = 'project_about'>
                            <h4>WrestleMania Game</h4>
                            <p>
                                This is an interactive multimedia board game built using vanilla JS. As a player advances through 
                                the board, depending on where they land, will trigger different videos and sound effects. 
                                <br />
                                <br />
                                This was one of my first projects and I wanted to share it to show my progression as a developer
                                in contrast to my current full stack applications. 
                                <br/>
                                <br/>
                                Available for desktop only. 
                                <br />
                                <a href = 'https://github.com/davidgrunblatt/wrestlemania' target = '_blank'>
                                    <img className = 'github' src = {require('../images/github.png')} alt = 'github' />
                                </a>
                                <a href = 'https://wrestlemania-game.netlify.com/' target = '_blank'>
                                    <img id = 'arrow' className = 'github' src = {require('../images/goto.png')} alt = 'visit page' />
                                </a>
                            </p>
                            <ul>
                                <li><span>Features: </span></li>
                                <li className = 'badge'>Multimedia: video, audio effects</li>
                            </ul>
                            <ul>
                                <li><span>Technologies used:</span> </li>
                                <li className = 'badge'>HTML</li>
                                <li className = 'badge'>CSS</li>
                                <li className = 'badge'>JavaScript</li>
                                <li className = 'badge'>GIT</li>
                                <li className = 'badge'>Netlify</li>
                            </ul>
                        </div>
                    </article> */}
                </section>
            </div>
        )
    }
}

export default Work; 
