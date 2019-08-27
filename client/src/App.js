import React from 'react';

// STYLES == STYLES
import 'bootstrap/dist/css/bootstrap.css'; 
import './Sass/global.css'; 
import './styles/jumbo/jumbo.css'; 
import './styles/articles/articles.css';

// COMPONENTS == COMPONENTS
import Jumbotron from './components/Jumbotron'; 
import Nav from './components/Nav'; 
import Articles from './components/Articles';

// IMAGES == IMAGES
import logo from './images/logo.png'; 
import responsive_header from './images/responsive-design.png';
import responsive_img from './images/responsive.jpg'; 
import javascript_header from './images/javascript.png'; 

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            logo,
            responsive_header,
            responsive_img,
            responsive_string: 'Look great on any platform, from mobile to desktop.',
            javascript_header,
            javascript_string: 'I use cutting edge Javascript to create fast full stack applications.'
        }
    }

    fadeIn(){
        const wrapper = document.querySelector('#wrapper'); 
        setTimeout(() => {
                wrapper.classList.remove('out');
                wrapper.classList.add('in'); 
            });

        // ARTICLE FADE INS
        const article_items = document.querySelectorAll('.article_item');
        let i = 0;
        window.addEventListener('scroll', () => {
            if (document.documentElement.scrollTop > 600){
                for(i; i < 2; i++){
                    article_items[i].classList.remove('out');
                    article_items[i].classList.add('in');
                }
            }
            if (document.documentElement.scrollTop > 800){
                for(i = 2; i < 4; i++){
                    article_items[i].classList.remove('out');
                    article_items[i].classList.add('in');
                }
            }
        })
    }

    componentDidMount(){
        this.fadeIn(); 
    }

    render(){
        return(
            <div id = 'wrapper' className = 'out'>
                <Jumbotron logo = {this.state.logo} />
                <Nav />
                <Articles r_header = {this.state.responsive_header} r_img = {this.state.responsive_img}
                          r_string = {this.state.responsive_string} js_string = {this.state.javascript_string} 
                          js_header = {this.state.javascript_header} js_img = {this.state.javascript_img} 
                />
            </div>
        )
    }
}

export default App; 