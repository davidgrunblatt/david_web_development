import React from 'react';
import fullstack_img from '../images/full-stack-development.jpg'; 
import github from '../images/github.png'; 


class About extends React.Component{
    render(){
        return(
            <div id = 'about' className = 'margin out'>
                <div className = 'about_item'>
                    <img className = 'header' src = {this.props.about_header} alt = 'logo'/>
                    <p>
                        My name is David Grunblatt and I'm a web developer living in Los Angeles, Ca. <br/>
                        I'm passionate about learning and constantly trying to expand my skillset, as I take great
                        care in crafting my apps meticulously from wireframes to deployment. <br/>
                        <br/>
                        When I'm not writing code I'm either at my local rock climbing gym or practicing a fingerstyle
                        guitar piece. 
                    </p>
                    <img className = 'about_img silver' src = {this.props.headshot} alt = 'David'/> 
                </div>
                <div className = 'about_skills margin'>
                    <div>
                        <h5>Skills</h5>
                        <p><span>Front End:</span> HTML, CSS, SASS, Bootstrap, Responsive Design, Javascript, React.js, Restful API</p>
                        <p><span>Back End:</span> Node.js, Express.js, Unit Testing, MongoDB, mySQL</p>
                        <p><span>Other tools:</span> GIT, Heroku, AdobeXD, Sockets.io</p>
                        <a href = 'https://github.com/davidgrunblatt' target = '_blank'>
                            <img className = 'github shadow' src = {github} alt = 'github icon' />
                        </a>
                    </div>
                    <img className = 'about_fullstack' src = {fullstack_img} alt = 'fullstack icon'/> 
                </div>
            </div>
        )
    }
}

export default About; 