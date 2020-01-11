import React from 'react';
import fullstack_img from '../images/full-stack-development.jpg'; 
import github from '../images/github.png'; 


const About = (props) => {
   return(
        <div id = 'about' className = 'margin out'>
            <div className = 'about_item'>
                <img className = 'header' src = {props.about_header} alt = 'logo'/>
                <p>
                    My name is David Grunblatt and I'm a web developer living in Los Angeles, Ca. <br/>
                    I'm passionate about learning and constantly trying to expand my skillset. I take great
                    care in hand crafting my apps meticulously from wireframes all the way to deployment. <br/>
                    <br/>
                    When I'm not writing code I'm working on my hobbies. My other two passions in life aside from web development
                    are rock climbing and playing finger style guitar. Like with coding I take great pride in working on and
                    enhancing my skills.
                </p>
            </div>
            <div className = 'about_skills margin'>
                <div>
                    <h5>Skills</h5>
                    <p><span>Front End:</span> HTML, CSS, SCSS, Responsive Design, Bootstrap, JavaScript, AJAX, React.js</p>
                    <p><span>Back End:</span> Node.js, Express.js, MongoDB, Mongoose, SQL</p>
                    <p><span>Other Skills / Tools:</span> GIT, Heroku, Wordpress, UX, AdobeXD, Prototyping</p>
                    <a href = 'https://github.com/davidgrunblatt' target = '_blank'>
                        <img className = 'github shadow' src = {github} alt = 'github icon' />
                    </a>
                </div>
                <div>
                    <img className = 'about_fullstack' src = {fullstack_img} alt = 'fullstack icon'/> 
                </div>
            </div>
        </div>
   )
}

export default About; 