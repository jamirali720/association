import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/pages/Home';
import Navbar from './Components/pages/Navbar';
import Dashboard from './Components/pages/Dashboard';
import PrivateRoute from './Components/pages/PrivateRoute';
import NotFound from './Components/pages/NotFound';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import AuthProvider from './Components/AuthProvider/AuthProvider';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  
  return (
    <div className="App">
        <AuthProvider>
          <Router>
            <Navbar/>               
            <Routes>
                <Route path='/' element={<Home/>} />               
                <Route path='/register' element={<Register/>} />     
                <Route path='/login' element={<Login/>} />     
                <Route path='dashboard/*' element={<PrivateRoute> <Dashboard/></PrivateRoute>}/>                        
                 <Route  path='*' element={<NotFound/>} />
            </Routes>
          </Router>
          <ToastContainer/>
          </AuthProvider>

    </div>
   
  );
}

export default App;
