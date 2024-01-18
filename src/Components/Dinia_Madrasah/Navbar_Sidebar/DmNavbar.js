
import React  from 'react';
import { Link } from 'react-router-dom';




const DmNavbar = () => {     
  
    return (
      <div className="section-one ">
        <nav className="navbar navbar-expand-sm bg-success navbar-light">
          <div className="container-fluid">
            <div>
              {" "}
              <Link className="nav-linkb fs-3 navbar-brand text-white" to="/">
                Home
              </Link>{" "}
            </div>
            <div className="">
              {" "}
              <h1 className="text-primary text-white"> দ্বীনিয়া মাদরাসা </h1>{" "}
            </div>
            <div>
              <ul className="navbar-nav me-5">
                <li className="nav-item">
                  <Link className="nav-link fs-4 text-white" to="/madrasah/dashboard">
                    মাদরাসা ডেসবোর্ড
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
};


export default DmNavbar;