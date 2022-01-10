import React from 'react';

import { useNavigate } from 'react-router-dom';

const DashboardHome = () => {
    const navigate = useNavigate();

    const sendingId =(name) => {
       
        navigate(`${name}`)
    }
    return (
        <div>
               <h2 className="text-success text-center
                        "> Welcome to Dashboard</h2>
                        <button onClick={() => sendingId(5)}> send id</button>
          
        </div>
    );
};

export default DashboardHome;