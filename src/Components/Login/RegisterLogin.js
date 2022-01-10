import React from 'react';

import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import auth from './FirebaseConfigs';
import { useLocation, useNavigate } from 'react-router-dom';
import {useContext} from 'react';
import {userContext} from '../../App';

const RegisterLogin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    console.log(loggedInUser)
    const navigate = useNavigate();
    const location = useLocation(); 
   
    let {from } = location.state || {from:  {pathName : '/'}}
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            const {email, displayName, photoURL }= user;
            if(email){
                alert('You have successfully registered/login');               
            }
            const signedInUser = {name: displayName, email, photoURL };
            setLoggedInUser(signedInUser)
            storeAuthToken();
            navigate(from)
           
        }).catch(error => {
           const  errorEmail = error.email;
            if(errorEmail) {
                alert('Something is wrong !!')
            }
        })
    }

    const storeAuthToken =() => {
        auth.currentUser.getIdToken(true)
        .then(function(idToken) {
            sessionStorage.setItem('token', idToken);
        }).catch(error => console.log(error))
    }
    return (
        <div className='main' style={{width: 300, height: 400, margin: 'auto'}}>
            <div className="form-container">
                <div className="header">
                    <h1> Register / Login</h1>
                </div>
                <div className="google-container">
                    <button className="btn btn-success" onClick={googleSignIn}> Register / Login With Google Account</button>
                </div>

            </div>
        </div>
    );
};

export default RegisterLogin;