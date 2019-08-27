import React from 'react';

class Jumbotron extends React.Component{

    componentDidMount(){
        const nav = document.querySelector('.nav-bar');
        const slogan = document.querySelector('.slogan');
        const logo = document.querySelector('.nav-bar div:nth-child(1)');

        window.addEventListener('scroll', function(){
            if(document.documentElement.scrollTop > 10 || document.body.scrollTop > 10){
                nav.classList.add('sticky');
                slogan.style.right = '0';
            } else {
                nav.classList.remove('sticky');
            }
        });

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
                            <h3>David G.</h3> 
                            <p>Full Stack Web Developer</p>
                        </span>
                    </div>
                </div> 
                {/*END OF NAVBAR == END OF NAVBAR */}

                <div className= 'slogan'>
                    <div className= 'slogan-background'>
                        <h1>Lets build something beautiful together</h1>
                    </div>
                </div>
                
            </div> 
        )
    }
}

export default Jumbotron; 