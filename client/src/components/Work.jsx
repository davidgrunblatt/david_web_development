import React from 'react';

class Work extends React.Component{
    render(){
        return(
            <div id = 'portfolio' className = 'silver'>
                <img className = 'header' src = {this.props.work} alt = 'contact header' />

                {/* Drive  */}
                <section id = "drive">
                    <article className = 'project'>
                        <div>
                            <a href = 'https://drivewebpros.com/' target = '_blank'>
                                <img className = 'portfolio_img' src = {require('../images/driveIMG.png')} alt = 'drive web pros' />
                            </a>
                        </div>
                        <div className = 'project_about'>
                            <h4>Drive</h4>
                            <p><span>Role: </span> Full Stack Web Developer</p>
                            <ul className = 'work_margin'>
                                <li><span>Technologies / Skills used:</span> </li>
                                <li className = 'badge'>HTML</li>
                                <li className = 'badge'>CSS</li>
                                <li className = 'badge'>jQuery</li>
                                <li className = 'badge'>JavaScript</li>
                                <li className = 'badge'>C# / .NET</li>
                                <li className = 'badge'>Progressive Web Apps</li>
                                <li className = 'badge'>Azure</li>
                                <li className = 'badge'>MongoDB</li>
                                <li className = 'badge'>Photoshop</li>
                                <li className = 'badge'>Search engine optimization</li>
                            </ul> 
                            <p className = 'work_margin'>
                                In my time as a web developer at Drive I've worked in a fast paced
                                environment where my skills are put to the test as we create, update,
                                and provide technical support for over 400+ websites and applications from a wide variety of clients. 
                                <br />
                                <a href = 'https://drivewebpros.com/' target = '_blank'>
                                    <img id = 'arrow' className = 'github' src = {require('../images/goto.png')} alt = 'visit page' />
                                </a>
                            </p>
                        </div>
                    </article>
                </section>

                <section id="furelos">
                    <article className = 'project'>
                        <div>
                            <a href ='#' target = '_blank'>
                                <img className = 'portfolio_img' src = {require('../images/portfolio2.png')} alt = '' />
                            </a>
                        </div>
                        <div className = 'project_about'>
                            <h4>Furelos Clinic Online</h4>
                            <p>
                                The Furelos Clinic is a world renowned facial reconstruction surgery center. 
                                This full stack web application is made with the purpose of connecting users
                                to their surgeon. This app accomplishes this by offering live video conference services, 
                                as well as the ability to share files, make appointments, and update information in real time. 
                                <br />
                            </p>
                            <ul>
                                <li><span>Features: </span></li>
                                <li className = 'badge'>Realtime video chat</li>
                                <li className = 'badge'>Authentication / Authorization</li>
                                <li className = 'badge'>Account registration - CRUD operations</li>
                                <li className = 'badge'>File Sharing</li>
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
//                             <a href = 'https://www.furelos-online.com/' target = '_blank'>
//                               <img id = 'arrow' className = 'github' src = {require('../images/goto.png')} alt = 'visit page' />
//                             </a>
                        </div>
                    </article>
                </section>

                {/* BLINDLY  */}
                <section>
                    <article id = 'blindly' className = 'project'>
                        <div>
                            <a target = '_blank' href="#">
                                <img className = 'portfolio_img' src = {require('../images/blindlyScreen.png')} alt = '' />
                            </a>
                        </div>
                        <div className = 'project_about'>
                            <h4>Blindly</h4>
                            <ul className = 'work_margin'>
                                <li><span>Technologies used:</span> </li>
                                <li className = 'badge'>React Native</li>
                                <li className = 'badge'>MongoDB</li>
                                <li className = 'badge'>Jest</li>
                                <li className = 'badge'>SQLite</li>
                                <li className = 'badge'>AWS</li>
                            </ul> 
                            <p className = 'work_margin'>
                                Blindly is a startup based in the Bay Area. I had the pleasure of working with 
                                an energetic team striving to provide users with the best user experience possible.
                                My time at Blindly was spent refactoring the UI to enhance both
                                user experience and application performance.
                                <br />
                            </p>
//                             <a href = 'https://www.blindly.date/' target = '_blank'>
//                                 <img id = 'arrow' className = 'github' src = {require('../images/goto.png')} alt = 'visit page' />
//                             </a>
                        </div>
                    </article>
                </section>
            </div>
        )
    }
}

export default Work; 
