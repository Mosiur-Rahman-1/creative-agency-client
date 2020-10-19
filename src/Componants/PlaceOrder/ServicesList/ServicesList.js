import React from 'react';
import logo from '../../../images/logos/logo.png';
import { Link } from 'react-router-dom';
import webDesignImage from '../../../images/icons/service1.png';
import graphicDesignImage from '../../../images/icons/service2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faList, faCommentAlt } from '@fortawesome/free-solid-svg-icons';

const ServicesList = () => {
    return (
    <div className="container-fluid" >

    <div className = "d-flex justify-content-between pt-4 px-4">
        <Link to="/"><img src={logo} alt="" height="38"/></Link>
        <h5>Order</h5>
        <h5>user</h5>
    </div>
    <div className="row admin-navbar">

        <div className="col-md-3">
            <ul className="mt-5">
                <Link to="/client/order"><FontAwesomeIcon icon={faShoppingCart} className = "pr-1"/>Order</Link>
                <br/>
                <Link to="/client/services"><FontAwesomeIcon icon={faList} className = "pr-1"/>Service list</Link>
                <br/>
                <Link to="/client/review"><FontAwesomeIcon icon={faCommentAlt} className = "pr-1"/>Review</Link>
            </ul>

        </div>
        <div className = "row pt-5">
            {/* Web & Mobile design service */}
            <div style={{width: "25rem"}} className ="pr-5">
                <div className="card-body">
                    <img src={webDesignImage} alt="" className = "services-image"/>
                    <h5 className="card-title pt-4">Web & Mobile design</h5>
                    <p className="card-text">We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
                </div>
            </div>

            {/* Graphic design service */}
            <div style={{width: "22rem"}}>
                <div className="card-body">
                    <img src={graphicDesignImage} alt="" className = "services-image"/>
                    <h5 className="card-title pt-4">Graphic design</h5>
                    <p className="card-text">Amazing flyers, social media posts and brand representations that would make your brand stand out.</p>
                </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default ServicesList;