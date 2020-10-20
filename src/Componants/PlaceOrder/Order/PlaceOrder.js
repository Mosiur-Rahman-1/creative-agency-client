import React, { useContext } from 'react';
import logo from '../../../images/logos/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faList, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const PlaceOrder = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
    <div className="container-fluid" >

        <div className = "d-flex justify-content-between pt-4 px-4">
            <Link to="/"><img src={logo} alt="" height="38"/></Link>
            <h5>Order</h5>
            <h5 id = "userName">{loggedInUser.name}</h5>
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
            <div className="col-md-6" style={{ height: '100vh', background: '#F4F7FC' }}>
                <div className="bg-white p-5 ">
                    <form >
                        <div className="row">
                            <div className="col form-group">
                                <input type="text" id="title" name="title" className="form-control bg-light" placeholder="Your name/Company name"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col form-group">
                                <input type="text" id="title" name="title" className="form-control bg-light" placeholder="Your email address"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col form-group">
                                <input type="text" id="title" name="title" className="form-control bg-light" placeholder="Graphic design"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col form-group">
                                <input type="text" id="title" name="title" className="form-control bg-light" placeholder="Project details"/>
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col">
                                <input type="text" id="description" className="form-control bg-light" placeholder="Price"/>
                            </div>
                            <div className="col form-group">
                                <input type="file" id="image" className="form-control-file"/>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-start pl-3">
                            <input type="submit" value="Send" className="btn btn-dark px-5 py-2"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div >
    );
};

export default PlaceOrder;