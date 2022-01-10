import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
    const params= useParams();
    console.log(params.userId)
    return (
        <div>
            this is profile
        </div>
    );
};

export default Profile;