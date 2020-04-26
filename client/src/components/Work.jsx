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
                            <p><span>Role: </span> Web Developer</p>
                            <ul className = 'work_margin'>
                                <li><span>Technologies used:</span> </li>
                                <li className = 'badge'>C# / .NET</li>
                                <li className = 'badge'>SQL</li>
                            </ul> 
                            <p className = 'work_margin'>
                                Drive WebPros is a full-service website, marketing, and design team dedicated to increasing 
                                business for clients. 
                                <br />
                                <a href = 'https://drivewebpros.com/' target = '_blank'>
                                    <img id = 'arrow' className = 'github' src = {require('../images/goto.png')} alt = 'visit page' />
                                </a>
                            </p>
                        </div>
                    </article>
                </section>

                {/* BLINDLY  */}
                <section>
                    <article id = 'blindly' className = 'project'>
                        <div>
                            <a href = 'https://blindlydate.com/' target = '_blank'>
                                <img className = 'portfolio_img' src = {require('../images/blindlyScreen.png')} alt = '' />
                            </a>
                        </div>
                        <div className = 'project_about'>
                            <h4>Blindly</h4>
                            <p><span>Role: </span> Full Stack Developer</p>
                            <ul className = 'work_margin'>
                                <li><span>Technologies used:</span> </li>
                                <li className = 'badge'>React Native</li>
                                <li className = 'badge'>AWS</li>
                                <li className = 'badge'>MongoDB</li>
                            </ul> 
                            <p className = 'work_margin'>
                                Blindly is a startup based in the Bay Area seeking to revolutionize 
                                the mobile dating scene. I've had the pleasure of working with an energetic 
                                and enthusiastic team in an effort to provide users with the best experience 
                                possible.
                                <br />
                                <a href = 'https://blindlydate.com/' target = '_blank'>
                                    <img id = 'arrow' className = 'github' src = {require('../images/goto.png')} alt = 'visit page' />
                                </a>
                            </p>
                        </div>
                    </article>
                </section>

                {/* CARS */}
                <section>
                    <article id = 'blindly' className = 'project'>
                        <div>
                            <a href = 'https://www.ragingbull-performance.com/Index.aspx' target = '_blank'>
                                <img className = 'portfolio_img' src = {require('../images/carIMG.png')} alt = '' />
                            </a>
                        </div>
                        <div className = 'project_about'>
                            <h4>Raging Bull Automotive</h4>
                            <ul className = 'work_margin'>
                                <li><span>Technologies used:</span> </li>
                                <li className = 'badge'>C#</li>
                                <li className = 'badge'>.NET</li>
                            </ul> 
                            <p className = 'work_margin'>
                                This is a landing page built using C# for Raging Bull automotive. 
                                <br />
                                <a href = 'https://www.ragingbull-performance.com/Index.aspx' target = '_blank'>
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
