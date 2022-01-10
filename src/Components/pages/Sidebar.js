import React, { useContext } from 'react';
import { Link} from 'react-router-dom';
import { userContext } from '../../App';



const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] =useContext(userContext);
    return (
        <div className="main card mt-1 bg-secondary">
            <div className="image-container">
                <img className="rounded-circle m-2"  src={loggedInUser.photoURL} alt=""  style={{width:110, height: 110}} />
            </div>
            <nav>          
                <ul className="nav nav-tabs flex-column justify-content-center">
                <li className="nav-item">
                    <Link className="nav-link active"  to="member">Add Member</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white"  to="/"> Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white"  to="amount">Amount</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="me">Profile</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white"  to="#">Link</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="#">Link</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white"  to="contact">Contact</Link>
                </li>
                </ul>
            </nav>   

        </div>
    );
};

export default Sidebar;