import React from 'react';
import './ClientFeedback.css';
import clientImageOne from '../../../images/customer-1.png';
import clientImageTwo from '../../../images/customer-2.png';
import clientImageThree from '../../../images/customer-3.png';

const ClientFeedback = () => {
    return (
        <div className = "container py-5 my-5">
            <h3  className = "pb-5 mb-4">Client Feedback</h3>
            <div className ="row justify-content-between">
                {/* First client card */}
                <div className="card" style={{width: "370px"}}>
                    <div className="card-body">
                        <img src={clientImageOne} alt="" className = "float-left image-width pr-3"/>
                        <h5 className="card-title text-left pt-1">Nash Patrik</h5>
                        <h6 className="card-subtitle text-left">CEO, Manpol</h6>
                    </div>
                    <p className="card-text text-left pl-4 pb-4">Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Purus commodo ipsum <br/>duis laoreet maecenas. Feugiat </p>
                </div>

                 {/* Second client card */}
                 <div className="card" style={{width: "370px"}}>
                    <div className="card-body">
                        <img src={clientImageTwo} alt="" className = "float-left image-width pr-3"/>
                        <h5 className="card-title text-left pt-1">Miriam Barron</h5>
                        <h6 className="card-subtitle text-left">CEO, Manpol</h6>
                    </div>
                    <p className="card-text text-left pl-4 pb-4">Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Purus commodo ipsum <br/>duis laoreet maecenas. Feugiat </p>
                </div>

                 {/* Third client card */}
                 <div className="card" style={{width: "370px"}}>
                    <div className="card-body">
                        <img src={clientImageThree} alt="" className = "float-left image-width pr-3"/>
                        <h5 className="card-title text-left pt-1">Bria Malone</h5>
                        <h6 className="card-subtitle text-left">CEO, Manpol</h6>
                    </div>
                    <p className="card-text text-left pl-4 pb-4">Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Purus commodo ipsum <br/>duis laoreet maecenas. Feugiat </p>
                </div>
            </div>
            
        </div>
    );
};

export default ClientFeedback;