import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className = "bg-color">
            <div className = "container">
            <div className ="row align-items-center">
                <div className= "col-md-6 text-left">
                    <h2>Let us handle your<br/> 
                    project, professionally.
                    </h2>
                    <p className = "pt-3">With well written codes, we build amazing apps for all<br/> platforms, mobile and web apps in general.</p>
                </div>
                <div className= "col-md-6 pt-5 mt-5">
                    <form>
                        <div className="form-group">
                            <input type="email" className="form-control py-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder = "Type your email"/>
                        </div>
                        <div class="form-group">
                            <input type="text" className="form-control py-4" id="formGroupExampleInput" placeholder="Type your Name/Business Name"/>
                        </div>
                        <div class="form-group">
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" placeholder="Type your message here"></textarea>
                        </div>
                        <button type="submit" className="btn btn-dark float-left px-5 py-2">Send</button>
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Contact;