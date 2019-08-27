import React from 'react';

// STYLES == STYLES
import 'bootstrap/dist/css/bootstrap.css'; 
import './styles/jumbo/jumbo.css'; 

// COMPONENTS == COMPONENTS
import Jumbotron from './components/Jumbotron'; 
import Nav from './components/Nav'; 

// IMAGES == IMAGES
import logo from './images/logo.png'; 

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            logo
        }
    }
    render(){
        return(
            <div>
                <Jumbotron logo = {this.state.logo} />
                <Nav />
            </div>
        )
    }
}

export default App; 