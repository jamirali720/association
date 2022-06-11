
import React  from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../useAuth/useAuth';





const Navbar = () => {  
    const {user,logoutUser }  =useAuth();
    const navigate = useNavigate();

  
  
 
    return (
        <div className="section-one">         
            <nav className="navbar navbar-expand-sm bg-light navbar-light">
                <div className="container-fluid">                              
                    <div> <Link className="nav-link navbar-brand" to="/">Home</Link>     </div>             
                    <div className="">   <h1 className="text-primary"> ওলামা কল্যাণ পরিষদ </h1>  </div>
                    <div>
                        <ul className="navbar-nav me-5">  
                            <li className="nav-item">
                                <Link className="nav-link text-dark" to="dashboard">Dashboard</Link>
                            </li>  

                            { user?.email || sessionStorage.getItem('token') ? 
                                ( <li className="nav-item">
                                    <button className="btn btn-success" onClick={()=>logoutUser(navigate)}>Logout</button>
                                </li>) : (
                                    <div className="d-flex justify-content-center">
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/register">Register</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/login">Sign In</Link>
                                    </li>
                                    </div>
                                ) 
                            }  

                        </ul>
                    </div>                   
                </div>
            </nav>
            
        </div>
    );
};

export default Navbar;