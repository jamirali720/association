import React from 'react';
import Sidebar from './Sidebar';
import {Routes, Route} from 'react-router-dom';
import DashboardHome from './DashboardHome';
import AddAmount from './AddAmount';
import AddMember from './AddMember';
import Profile from './Profile';
import Users from './Users';
import MakeAdmin from './MakeAdmin';
import Management from './Management';
import UpdateUser from './UpdateUser';
import ExpendsAmount from './ExpendsAmount';
import AmountCorrection from './AmountCorrection';
import SingleUsersAmount from './SingleUsersAmount';
import BenefitMoney from './BenefitMoney';
import DeleteBenefit from './DeleteBenefit';




const Dashboard = () => {
    return (
        <div className="container-fluid">
            <div className="row ">              
                <div className="col-md-2" style={{ height: "auto", }}>
                    <Sidebar/>                 
                </div>
                <div className="col-md-10">                    
                     
                    <Routes>
                        <Route path="/"  element={< DashboardHome/>}  />
                        <Route path="amount"  element={<AddAmount/>} />                        
                        <Route path=":correctionId"  element={<AmountCorrection/>} />                        
                        <Route path="correction"  element={<SingleUsersAmount/>} />                        
                        <Route path="expense"  element={<ExpendsAmount/>} />
                        <Route path="user/:userId"  element={<UpdateUser/>}  />    
                        <Route path="benefit"  element={<BenefitMoney/>} />
                        <Route path="member"  element={<AddMember/>}  />    
                        <Route path="me"  element={<Profile/>}  />                        
                        <Route path="user"  element={<Users/>}  />                   
                        <Route path="admin"  element={<MakeAdmin/>}  />    
                        <Route path="delete/benefit"  element={<DeleteBenefit/>}  />    
                        <Route path="management"  element={<Management/>}  />    
                    </Routes>
              
                </div>
            </div>
           
        </div>
    );
};

export default Dashboard;