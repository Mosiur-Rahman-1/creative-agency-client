import React from 'react';
import { Link} from 'react-router-dom';
import logo from '../../../images/logos/logo.png';

const Navigation = () => {
    const handleAdminLogIn = () => {
       const adminInput =  prompt('please enter your admin email to access');
       if (adminInput.value == "programming.hero.instructor@gmail.com" && "" && " "){
           alert("right email!! Congrats please click ok to access the admin dashboard");
           
       } else {
            alert("wrong email!! please use your admin email to access");
       }
        
    }
    return (
        <div>
            <div className = "container">
                <nav className="navbar navbar-expand-lg navbar-expand-sm">
                    <div>
                        <Link to ="/"><img src={logo} height="48" alt="" loading="lazy"/></Link>
                    </div>
                    <div className="justify-content-end collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to = "/" className="nav-link active px-4 text-dark">Home</Link>
                            <a className="nav-link px-4  text-dark" href="#portfolio">Our Portfolio</a>
                            <a className="nav-link px-4  text-dark" href="#">Our Team</a>
                            <a className="nav-link px-4  text-dark" href="#contact">Contact Us</a>
                            <Link to ="/admin/orderServices" onClick = {handleAdminLogIn}className="nav-link btn btn-dark px-5 text-light">Login</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navigation;