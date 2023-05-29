import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from '../useAuth/useAuth';


const MainHeader = () => {
  const {user,logoutUser }  = useAuth();
  const navigate = useNavigate();
  return (
    <main>
      <nav className="navbar navbar-expand-sm bg-primary navbar-light">
        <div className="container-fluid">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link active text-white" to="/association">
              Association
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/fp">
               Fp Tasks
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="#">
                Link
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="#">
                Disabled
              </Link>
            </li>
            
            { user?.email || sessionStorage.getItem('token') ? 
                                ( <li className="nav-item">
                                    <button className="btn btn-success" onClick={()=>logoutUser(navigate)}>Logout</button>
                                </li>) : (
                                    <div className="d-flex justify-content-center">
                                    <li className="nav-item">
                                        <Link className="nav-link active text-white" to="/register">Register</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active text-white" to="/login">Sign In</Link>
                                    </li>
                                    </div>
                                ) 
                            }  
          </ul>
        </div>
      </nav>     
    </main>
  );
};

export default MainHeader;
