import React from 'react';
import construction from '../images/coming-soon.jpg'; 

class Work extends React.Component{
    render(){
        return(
            <div id = 'portfolio' className = 'container-fluid'>
                <div className = 'row'>
                    <img className = 'construction shadow' src = {construction} alt = 'coming soon'/> 
                </div>
            </div>
        )
    }
}

export default Work; 