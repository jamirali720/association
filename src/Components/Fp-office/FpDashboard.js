import React from 'react';
import {Routes, Route} from 'react-router-dom';
import FpSidebar from './FpSidebar';
import FpDashboardHome from './FpDashboardHome';
import AddInfo from './AddInfo';
import Management from './Management';
import Update from './Update';





const FpDashboard = () => {
    return (
        <div className="container-fluid">
            <div className="row ">              
                <div className="col-md-2" style={{ height: "auto", }}>
                    <FpSidebar/>                 
                </div>
                <div className="col-md-10">                    
                     
                    <Routes>
                        <Route path="/"  element={< FpDashboardHome/>}  />
                        <Route path="/addInfo"  element={< AddInfo/>}  />
                        <Route path="/management"  element={< Management/>}  />
                        <Route path="/update/:id"  element={< Update/>}  />
                    
                    </Routes>
              
                </div>
            </div>
           
        </div>
    );
};



export default FpDashboard;