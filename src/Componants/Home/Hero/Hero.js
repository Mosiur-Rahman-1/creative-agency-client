import React from 'react';
import './Hero.css';
import image from '../../../images/logos/Frame.png';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className = "row bg-color align-items-center">
            <div  className = "col-md-4 text-left offset-md-1 pl-5">
                <h1 className = "heading-text">
                Let’s Grow Your<br/>
                Brand To The<br/> 
                Next Level
                </h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur<br/>
                adipiscing elit. Purus commodo ipsum duis<br/>
                laoreet maecenas. Feugiat
                </p>
                <Link to = "/client/order"><button className = "btn btn-dark px-5 py-2">Hire Us</button></Link>
            </div>
            <div  className = "col-md-7 pl-5">
                <img src={image} alt="hero banner image" className = "image-size pr-5"/>
            </div>
        </div>
    );
};

export default Hero;