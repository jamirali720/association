import React, {useEffect, useState} from 'react';


const DashboardHome = () => {
    const [amount, setAmount] =  useState([]);
    const [usersList, setUsersList] = useState([])
  
        useEffect(() =>{
            fetch('https://olama-kollan-association.herokuapp.com/allAmount')
            .then(res => res.json())
            .then(amount => setAmount(amount))
        }, [])

        useEffect(() =>{
            const refreshList =()=>{
              fetch('https://olama-kollan-association.herokuapp.com/getAllUsers')
              .then(res => res.json())
              .then(users => setUsersList(users))
            }
            refreshList();
          }, [])
      
          const total = amount.reduce((total, item) => total+ parseInt(item.amount), 0);

   
    return (
       <div className="row container">
            <div className="col-md-3 col-sm-12">
              <div className="card bg-info p-2 text-white h-100">
                  <h3> সর্বমোট সদস্য সংখ্যা = </h3>
                  <h4> {usersList.length} জন</h4>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
                <div className="card bg-success p-2 text-white h-100">
                    <h4> সর্বমোট উত্তোলিত টাকার পরিমান = </h4>
                    <h5>{total} টাকা </h5>
                </div>
            </div>
            <div className="col-md-3 col-sm-12">
                <div className="card bg-warning p-2 text-white h-100">
                    <h2> third column</h2>
                    <h2> will be added </h2>
                </div>
            </div>            
            <div className="col-md-3 col-sm-12">
                <div className="card bg-secondary p-2 text-white h-100">
                    <h3> fourth column</h3>
                    <h3> will be added</h3>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;