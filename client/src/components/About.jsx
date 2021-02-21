import React from 'react';
import fullstack_img from '../images/full-stack-development.jpg'; 
import github from '../images/github.png'; 


const About = (props) => {
   return(
        <div id = 'about' className = 'margin out'>
            <div className = 'about_item'>
                <img className = 'header' src = {props.about_header} alt = 'logo'/>
                <p>
                    <br />
                    My name is David Grunblatt, I'm an up and coming web developer in Los Angeles, CA.
                    Sophomore year of college I was introduced to the world of programming. Upon graduation, I was hired 
                    by a business consulting firm where I work with a fantastic team of colleagues to create and maintain 
                    over 400+ websites and applications for a wide variety of clients.
                    <br/><br/>
                    Today, I'm a passionate developer commited to life long learning, 
                    constantlg trying to expand my skillset. Whether I'm building an API or a beautiful UI, I 
                    take great pride in hand crafting my work from wireframes to deployment. 
                    <br /><br />
                    When I'm not writing code I'm working on my hobbies. My other two passions in life aside from programming
                    are playing music (instruments: violin, guitar) and indoor rock climbing. Like with coding I take great pride 
                    in working on and enhancing my skills.
                </p>
            </div>
            <div className = 'about_skills margin'>
                <div>
                    <h5>Skills</h5>
                    <p><span>Front End:</span> HTML, CSS, SCSS, Bootstrap, jQuery, JavaScript, TypeScript, React.js, PWA</p>
                    <p><span>Back End:</span> Node.js, MongoDB, SQL</p>
                    <p><span>Other:</span> Python, AdobeXD</p>
                </div>
                <div>
                    <img className = 'about_fullstack' src = {fullstack_img} alt = 'fullstack icon'/> 
                </div>
            </div>
        </div>
   )
}

export default About; 