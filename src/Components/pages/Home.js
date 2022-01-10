import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const  navigate = useNavigate();
    const handleSending =(id) => {
       navigate(`/dashboard/${id}`)
    }
    return (
        <div>
          <button  onClick={() =>  handleSending('50')}> send data</button>
        </div>
    );
};

export default Home;