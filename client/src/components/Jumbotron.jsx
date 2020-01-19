import React from 'react';

class Jumbotron extends React.Component{

    // COMPONENT DID MOUNT 
    componentDidMount(){
        const nav = document.querySelector('.nav-bar');
        const slogan = document.querySelector('.slogan');
        const logo = document.querySelector('.nav-bar div:nth-child(1)');

        // NAVBAR ON SCROLL LISTENER
        window.addEventListener('scroll', function(){
            if(document.documentElement.scrollTop > 10 || document.body.scrollTop > 10){
                nav.classList.add('sticky');
                slogan.style.right = '0';
            } else {
                nav.classList.remove('sticky');
            }
        });

        // SLOGAN ON LOAD LISTENER
        window.addEventListener('load', function(){
           setTimeout(() => {
                slogan.style.right = '0';
                logo.style.right = '0';
           }, 1000) 
        });
    }

    render(){
        return(
            <div id = 'jumbotron'>

                <div className= 'nav-bar'>

                    <div>
                        <img src = {this.props.logo} alt = 'Responsive design logo' />
                        <span>
                            <h3>David Grunblatt</h3> 
                            <p>Full Stack Web Developer</p>
                        </span>
                    </div>
                </div> 
                {/*END OF NAVBAR == END OF NAVBAR */}

                <div className= 'slogan'>
                    <div className= 'slogan-background'>
                        <h1>Let's build something beautiful together</h1>
                    </div>
                </div>
                
            </div> 
        )
    }
}

export default Jumbotron; 