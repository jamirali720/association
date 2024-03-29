import React, {  useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import useAuth from '../useAuth/useAuth';

import '../Global/Global.css'

import { FiLogOut } from "react-icons/fi";

const Sidebar = () => {
    const {user, logoutUser} = useAuth();
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
               

                { isAdmin  && 
                    <div>
                         <li className="nav-item">
                            <Link className="nav-link active"  to="member">Add Member</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white"  to="admin"> Make a admin</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white"  to="amount">Add Amount</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white"  to="correction">Single Amount</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white"  to="expense">Expense Amount</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white"  to="benefit">Benefit Amount</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="management">Management</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="delete/benefit">Delete Benefit</Link>
                        </li>
                    </div>
                }
               
                <li className="nav-item">
                    <Link className="nav-link text-white"  to="user">User's Amount</Link>
                </li>              
               
                <li className="nav-item">
                    <Link className="nav-link text-white"  to="/association">Association Home</Link>
                </li>              
                <li className="nav-item" onClick={() => logoutUser()}>
                    <Link className="nav-link text-white"  to="/#">  Logout <FiLogOut size={25} /> </Link>
                </li>              
                </ul>
            </nav>   

        </div>
    );
};

export default Sidebar;