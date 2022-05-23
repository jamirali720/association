import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/pages/Home';
import Navbar from './Components/pages/Navbar';
import { createContext } from 'react';
import { useState } from 'react';
import Dashboard from './Components/pages/Dashboard';
import PrivateRoute from './Components/pages/PrivateRoute';
import NotFound from './Components/pages/NotFound';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';




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
                <Route path='/register' element={<Register/>} />     
                <Route path='/login' element={<Login/>} />     
                <Route path='dashboard/*' element={<PrivateRoute>  <Dashboard/>  </PrivateRoute>} />                        
                 <Route  path='*' element={<NotFound/>} />
            </Routes>
          </Router>
      
    </userContext.Provider>
    </div>
   
  );
}

export default App;
