import React, { useContext } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { userContext } from '../../App';


const Navbar = () => {  
    const navigate = useNavigate();
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
   const logout =() => {
       setLoggedInUser('');
       sessionStorage.removeItem('token');
       navigate('/')
   }
    return (
        <div className="section-one">         
            <nav className="navbar navbar-expand-sm bg-light navbar-light">
                <div className="container-fluid">                              
                    <div> <Link className="nav-link navbar-brand" to="/">Home</Link>     </div>             
                    <div>   <h1 className="text-primary"> ওলামা কল্যাণ পরিষদ </h1>  </div>
                    <div>
                        <ul className="navbar-nav me-5">  
                            <li className="nav-item">
                                <Link className="nav-link text-dark" to="dashboard">Dashboard</Link>
                            </li>  

                            { loggedInUser.email || sessionStorage.getItem('token') ? 
                                ( <li className="nav-item">
                                    <button className="btn btn-success" onClick={logout}>Logout</button>
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