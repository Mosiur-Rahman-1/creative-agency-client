import React from 'react';
import logo from '../../../images/logos/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faList, faUser } from '@fortawesome/free-solid-svg-icons';


const ServicesAdmin = () => {
    return (
        <div className="container-fluid" >

        <div className = "d-flex justify-content-between pt-4 px-4">
            <Link to="/"><img src={logo} alt="" height="38"/></Link>
            <h5>Services List</h5>
            <h5>Admin</h5>
        </div>
        <div className="row admin-navbar">

            <div className="col-md-3">
                <ul className="mt-5">
                    <Link to="/admin/orderServices"><FontAwesomeIcon icon={faList} className = "pr-1"/>Service list</Link>
                    <br/>
                    <Link to="/admin/addService"><FontAwesomeIcon icon={faPlus} className = "pr-1"/>Add Service</Link>
                    <br/>
                    <Link to="/admin/makeAdmin"><FontAwesomeIcon icon={faUser} className = "pr-1"/>Make Admin</Link>
                </ul>
            </div>
            

                <div className="col-md-9" style={{ height: '100vh', background: '#F4F7FC' }}>
                    <div className="bg-white p-5">
                        <table className="table table-hover fixed">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email ID</th>
                                    <th scope="col">Service</th>
                                    <th scope="col">Project Details</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Mosiur Rahaman</th>
                                    <td>masiurreheman01@gmail.com</td>
                                    <td>Graphic Design</td>
                                    <td width = "100px">Lorem ipsum dolor sit amet.</td>
                                    <td><div class="dropdown">
                                    <button class="btn dropdown-toggle text-danger" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Pending
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item active" href="#">Pending</a>
                                        <a class="dropdown-item" href="#">Ongoing</a>
                                        <a class="dropdown-item" href="#">Done</a>
                                    </div>
                                    </div></td>
                                </tr>
                                <tr>
                                    <th scope="row">Poltu</th>
                                    <td>poltu@gmail.com</td>
                                    <td>Graphic Design</td>
                                    <td>Lorem ipsum dolor sit amet.</td>
                                    <td><div class="dropdown">
                                    <button class="btn dropdown-toggle text-danger" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Pending
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item active" href="#">Pending</a>
                                        <a class="dropdown-item" href="#">Ongoing</a>
                                        <a class="dropdown-item" href="#">Done</a>
                                    </div>
                                    </div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ServicesAdmin;