import React, { useContext } from 'react';
import { userContext } from '../../App';

const Profile = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
 
    return (
        <div>
             <div className="image-container">    

              <h1> this is Profile page</h1>

            </div>
        </div>
    );
};

export default Profile;