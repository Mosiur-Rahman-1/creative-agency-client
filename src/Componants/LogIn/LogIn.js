import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import logo from '../../images/logos/logo.png';



const LogIn = () => {

     // Removing duplicate error
     if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    
    const [signedInUser, setSignedInUser] = useState({});

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            var {displayName, email} = result.user;
            const signedUser = {name: displayName, email};
            setSignedInUser(signedUser);
            history.replace(from);
          }).catch(function(error) {
            console.log(error);
          });
    }
    return (
        <div className = "container">
            <img src={logo} alt="" height="48" className = "mx-auto d-block mt-5"/>
            <div className= 'row mt-5 pt-5'>
                <div className="card m-auto" style = {{height: "300px", width: "570px"}}>
                    <div className="card-body pt-5 mt-5">
                        <h5 className="card-title mb-4 text-center">Login with {signedInUser.name}</h5>
                        <button onClick = {handleGoogleSignIn} className="btn btn-primary mb-2 btn-block">Continue with Google</button>
                        <p className="card-text text-center">Don't have an account? <Link to = '/'>Create an account</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;