import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/pages/Dashboard";
import PrivateRoute from "./Components/pages/PrivateRoute";
import NotFound from "./Components/pages/NotFound";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import AuthProvider from "./Components/AuthProvider/AuthProvider";
import MainHome from "./Components/pages/MainHome";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Components/pages/Home";
import MadrasahHome from "./Components/Dinia_Madrasah/MadrasahHomePage";
import DmDashboard from "./Components/Dinia_Madrasah/Dashboard/DmDashboard";
import DmProvider from "./Components/DmProvider/DmProvider";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <DmProvider>
          <Router>
            <Routes>
              <Route path="/" element={<MainHome />} />
              <Route path="/association" element={<Home />} />
              <Route path="/madrasah" element={<MadrasahHome />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/association/dashboard/*"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/madrasah/dashboard/*"
                element={
                  <PrivateRoute>
                    <DmDashboard />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
          <ToastContainer />
        </DmProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
