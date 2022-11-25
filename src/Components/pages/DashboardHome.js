import React, {useEffect, useState} from 'react';
 
import '../Global/Global.css'

const DashboardHome = () => {
    const [amount, setAmount] =  useState([]);
    const [usersList, setUsersList] = useState([])
    const [expense, setExpense] =  useState([])
  
        useEffect(() =>{
            fetch('https://association-server.onrender.com/allAmount')
            .then(res => res.json())
            .then(amount => setAmount(amount))
        }, [])

        useEffect(() =>{
            const refreshList =()=>{
              fetch('https://association-server.onrender.com/getAllUsers')
              .then(res => res.json())
              .then(users => setUsersList(users))
            }
            refreshList();
          }, [])

          useEffect(() => {
              const fetchExpenseAmount = () => {
                  fetch('https://association-server.onrender.com/expenseMoney')
                  .then(res => res.json())
                  .then(data => setExpense(data))
              }
              fetchExpenseAmount();
          },[])
      
          const total = amount.reduce((total, item) => total+ parseInt(item.total), 0);
          const totalExpense = expense.reduce((total, item) => total+ parseInt(item.amount), 0);
          const existAmount = total - totalExpense;
    return (
       <div className="row container d-home">
            <div className="col-md-3 col-sm-12">
              <div className="card bg-info p-2 text-white h-100">
                  <h4> সর্বমোট সদস্য সংখ্যা = </h4>
                  <h3> {usersList.length} জন</h3>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
                <div className="card bg-success p-2 text-white h-100">
                    <h4> সর্বমোট উত্তোলিত টাকার পরিমান = </h4>
                    <h3>{total} টাকা </h3>                    
                </div>
            
            </div>
            <div className="col-md-3 col-sm-12">
                <div className="card bg-warning p-2 text-white h-100">
                <h4> সর্বমোট  ব্যয়কৃত টাকার পরিমান = </h4>
                <h3>{totalExpense} টাকা </h3>     
                </div>
            </div>            
            <div className="col-md-3 col-sm-12">
                <div className="card bg-secondary p-2 text-white h-100">
                    <h4>বর্তমানে ফান্ডে জমা আছে =  </h4>
                    <h3>{existAmount}  টাকা</h3>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;