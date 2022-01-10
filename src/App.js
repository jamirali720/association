import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import RegisterLogin from './Components/Login/RegisterLogin';
import Home from './Components/pages/Home';
import Navbar from './Components/pages/Navbar';
import { createContext } from 'react';
import { useState } from 'react';
import Dashboard from './Components/pages/Dashboard';
import PrivateRoute from './Components/pages/PrivateRoute';
import NotFound from './Components/pages/NotFound';
import Users from './Components/pages/Users';




export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] =  useState({});
  return (
    <div className="App">
    <userContext.Provider value ={[loggedInUser, setLoggedInUser]}>       
          <Router>
            <Navbar/>               
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route  path="/users/:userId" element={<Users/>} />
                <Route path='/login' element={<RegisterLogin/>} />     
                <Route path='dashboard/*' element={<PrivateRoute>  <Dashboard/>  </PrivateRoute>} />                        
                 <Route  path='*' element={<NotFound/>} />
            </Routes>
          </Router>
      
    </userContext.Provider>
    </div>
   
  );
}

export default App;
