import React from 'react';
import Sidebar from './Sidebar';
import {Routes, Route} from 'react-router-dom';
import DashboardHome from './DashboardHome';
import AddAmount from './AddAmount';
import AddMember from './AddMember';
import Profile from './Profile';




const Dashboard = () => {
    return (
        <div>
            <div className="row">
              
                <div className="col-md-2" style={{ height: "auto", }}>
                    <Sidebar/>
                 
                </div>
                <div className="col-md-10">                    
                     
                    <Routes>
                        <Route path="/"  element={< DashboardHome/>}  />
                        <Route path="amount"  element={<AddAmount/>} />
                        <Route path="member"  element={<AddMember/>}  />    
                        <Route path=":userId"  element={<Profile/>}  />    
                    </Routes>
              
                </div>
            </div>
           
        </div>
    );
};

export default Dashboard;