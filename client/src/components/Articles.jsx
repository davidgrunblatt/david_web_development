import React from 'react';

// IMAGES == IMAGES
import responsive from '../images/responsive.jpg'; 
import mern from '../images/mern.jpg'; 

const Articles = (props) => {
    return(
        <div id = 'articles_container'>
            <div className = 'article_one'>
                <div className = 'article_item out'>
                    <img className = 'header' src = {props.r_header} alt = 'logo'/>
                    <p>{props.r_string}</p>
                </div>
                <div className = 'article_item out'>
                    <img className = 'article_img' src = {responsive} alt = 'responsive design screens' />
                </div>
            </div>
            <div className = 'article_two silver'>
                <div className = 'article_item out'>
                    <img className = 'article_img' src = {mern} alt = 'javascript icons' />
                </div>
                <div className = 'article_item out'>
                    <img className = 'header' src = {props.js_header} alt = 'logo'/>
                    <p>
                        I specialize in using cutting edge JavaScript to create fast and dynamic web 
                        applications.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Articles; 