import React from 'react';
import { useParams } from 'react-router-dom';

const Users = () => {
    const params = useParams();
    console.log(params)
    return (
        <div>
            <h1> this is Users </h1>
        </div>
    );
};

export default Users;