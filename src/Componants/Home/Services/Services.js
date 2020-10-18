import React from 'react';
import './Services.css';
import webDesignImage from '../../../images/icons/service1.png'
import graphicDesignImage from '../../../images/icons/service2.png'
import webDevelopmentImage from '../../../images/icons/service3.png'

const Services = () => {
    return (
        <div className = "container pb-5 mb-5">
            <h1 className ="pb-5 mb-5">Provide awesome services</h1>
            <div className = "row justify-content-between">
                {/* Web & Mobile design service */}
                <div style={{width: "18rem"}}>
                    <div className="card-body">
                        <img src={webDesignImage} alt="" className = "services-image"/>
                        <h5 className="card-title pt-4">Web & Mobile design</h5>
                        <p className="card-text">We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
                    </div>
                </div>

                {/* Graphic design service */}
                <div style={{width: "18rem"}}>
                    <div className="card-body">
                        <img src={graphicDesignImage} alt="" className = "services-image"/>
                        <h5 className="card-title pt-4">Graphic design</h5>
                        <p className="card-text">Amazing flyers, social media posts and brand representations that would make your brand stand out.</p>
                    </div>
                </div>

                {/* Web development service */}
                <div style={{width: "18rem"}}>
                    <div className="card-body">
                        <img src={webDevelopmentImage} alt="" className = "services-image"/>
                        <h5 className="card-title pt-4">Web development</h5>
                        <p className="card-text">With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;