import React, {  useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import useAuth from '../useAuth/useAuth';

import '../Global/Global.css'



const FpSidebar = () => {
    const {user} = useAuth();
    const [isAdmin, setIsAdmin] =  useState(false)
  
  

    useEffect(() => {
        fetch('https://association-server.onrender.com/isAdmin', {
            method: "POST",
            headers: { 'content-type' : 'application/json'},
            body: JSON.stringify({email: user.email})
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data))
    } ,[user.email])

  

    return (
        <div className="main card mt-1 bg-secondary sidebar" style ={{minHeight: '100vh'}}>
            <div className="image-container">              
            <img className="rounded-circle m-2"  src={user.photoURL} alt=""  style={{width:110, height: 110}} />
               <p> <Link to="me" className="text-warning text-decoration-none">   My Profile</Link></p>
            </div>
            <nav>          
                <ul className="nav nav-tabs flex-column justify-content-center">
                <li className="nav-item">
                    <Link className="nav-link active"  to="/fp">Office Home</Link>
                </li>                
                  
                <li className="nav-item">
                    <Link className="nav-link text-white"  to="/fp/dashboard/addInfo">Add Info</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white"  to="/fp/dashboard/management">Management</Link>
                </li>
                </ul>
            </nav>   

        </div>
    );
};


export default FpSidebar;