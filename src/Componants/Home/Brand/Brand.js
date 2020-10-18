import React from 'react';
import './Brand.css';
import imageSlack from '../../../images/logos/slack.png';
import imageGoogle from '../../../images/logos/google.png';
import imageUber from '../../../images/logos/uber.png';
import imageNetflix from '../../../images/logos/netflix.png';
import imageAirBnb from '../../../images/logos/airbnb.png';

const Brand = () => {
    return (
        <div className="container">
            <div className ="row justify-content-between brand-logo-height align-items-center">
                <div>
                    <img src={imageSlack} alt="slack logo" className = "brand-img-size"/>
                </div>
                <div>
                    <img src={imageGoogle} alt="google logo" className = "brand-img-size"/>
                </div>
                <div>
                    <img src={imageUber} alt="uber logo" className = "brand-img-size"/>
                </div>
                <div>
                    <img src={imageNetflix} alt="netflix logo" className = "brand-img-size"/>
                </div>
                <div>
                    <img src={imageAirBnb} alt="airbnb logo" className = "brand-img-size"/>
                </div>
            </div>
        </div>
    );
};

export default Brand;