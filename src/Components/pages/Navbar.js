import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>         
            <nav className="navbar navbar-expand-sm bg-light navbar-light">
                <div className="container-fluid  ">                    
                    <h1 className="text-primary ms-auto"> ওলামা কল্যাণ পরিষদ </h1>                
                    <ul className="navbar-nav ms-auto me-5">                   
                    <li className="nav-item">
                        <Link className="nav-link active" to="/login">Register/Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/amount">Add Amount</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="dashboard">Dashboard</Link>
                    </li>
                    </ul>
                </div>
            </nav>
            
        </div>
    );
};

export default Navbar;