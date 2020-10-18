import React from 'react';
import logo from '../../../images/logos/logo.png';

const Navigation = () => {
    return (
        <div>
            <div className = "container">
                <nav className="navbar navbar-expand-lg navbar-expand-sm">
                    <div>
                        <img src={logo} height="48" alt="" loading="lazy"/>
                    </div>
                    <div className="justify-content-end collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                        <a className="nav-link active px-4  text-dark" href="#">Home<span className="sr-only">(current)</span></a>
                        <a className="nav-link px-4  text-dark" href="#">Our Portfolio</a>
                        <a className="nav-link px-4  text-dark" href="#">Our Team</a>
                        <a className="nav-link px-4  text-dark" href="#">Contact Us</a>
                        <a className="nav-link btn btn-dark px-5  text-light" href="#">Login</a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navigation;