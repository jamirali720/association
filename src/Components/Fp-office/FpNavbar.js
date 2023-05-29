
import React  from 'react';
import { Link } from 'react-router-dom';




const FpNavbar = () => {     
  
    return (
        <div className="section-one">         
            <nav className="navbar navbar-expand-sm bg-light navbar-light">
                <div className="container-fluid">                              
                    <div> <Link className="nav-link navbar-brand" to="/">Home</Link>     </div>             
                    <div className="">   <h1 className="text-primary">পরিবার পরিকল্পনা বিভাগ </h1>  </div>
                    <div>
                        <ul className="navbar-nav me-5">  
                            <li className="nav-item">
                                <Link className="nav-link text-dark" to="/fp/dashboard">Dashboard</Link>
                            </li>
                        </ul>
                    </div>                   
                </div>
            </nav>
            
        </div>
    );
};


export default FpNavbar;