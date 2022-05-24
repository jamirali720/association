import React, { useContext, useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import { userContext } from '../../App';
import Profile from './Profile';



const Sidebar = () => {
    const [isAdmin, setIsAdmin] =  useState(false)
    const [loggedInUser, setLoggedInUser] =useContext(userContext);

    useEffect(() => {
        fetch('https://olama-kollan-association.herokuapp.com/isAdmin', {
            method: "POST",
            headers: { 'content-type' : 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data))
    } ,[loggedInUser.email])

  

    return (
        <div className="main card mt-1 bg-secondary" style ={{minHeight: '100vh'}}>
            <div className="image-container">              
            <img className="rounded-circle m-2"  src={loggedInUser.photoURL} alt=""  style={{width:110, height: 110}} />
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
                            <Link className="nav-link text-white"  to="expense">Expense Amount</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="management">Management</Link>
                        </li>
                    </div>
                }
               
                <li className="nav-item">
                    <Link className="nav-link text-white"  to="user">User's Amount</Link>
                </li>              
                </ul>
            </nav>   

        </div>
    );
};

export default Sidebar;