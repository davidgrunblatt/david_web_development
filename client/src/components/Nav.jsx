import React from 'react';
import Scrollchor from 'react-scrollchor'; 

function Nav(){
    return(
        <div className = 'bottom-nav'>
            <Scrollchor to="#about" animate={{offset: -90, duration: 300}} className="nav-link">About</Scrollchor>
            <Scrollchor to="#portfolio" animate={{offset: -90, duration: 300}} className="nav-link">Portfolio</Scrollchor>
            <Scrollchor to="#contact" animate={{offset: -90, duration: 300}} className="nav-link">Contact</Scrollchor>
        </div>
    )
}

export default Nav;