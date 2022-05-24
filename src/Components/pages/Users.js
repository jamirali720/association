import React, { useContext,useState, useEffect} from 'react';

import { userContext } from '../../App';

const Users = () => {
const [userData, setUserData] = useState([]);
const [amount, setAmount] =  useState([])
const [loggedInUser] =useContext(userContext);

useEffect(() => {
    fetch(`https://olama-kollan-association.herokuapp.com/userAmount/${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => setAmount(data))
},[loggedInUser.email])


useEffect(() => {
    fetch(`https://olama-kollan-association.herokuapp.com/getUserData/${loggedInUser.email}`)
    .then(res => res.json())
    .then(data => setUserData(data))
}, [loggedInUser.email])

  const userAmount = amount.reduce((total, item) => total + parseInt(item.amount), 0)
  console.log(amount)
    return (
        
        <div className="m-3">
        <div>
        <h2 className="text-warning my-2"> আপনি জমা দিয়েছেন সর্বমোট : {userData.length} বার ।</h2>
        <h3 className="text-success my-2"> আপনার প্রতিবার জমার পরিমান : {amount[0]?.amount} টাকা ।</h3>
        <h4 className="text-info my-2"> আপনার সর্বমোট জমা হয়েছে : {userAmount}  টাকা  ।</h4>
        </div>
        <div className="d-flex justify-content-around flex-wrap">                 
            <table className="table bg-light table-bordered">
                <thead>
                    <tr>
                        <th className='text-primary'>তারিখ</th>     
                        <th className='text-primary'>নাম</th>
                        <th className='text-primary'>ই-মেইল</th>
                        <th className='text-primary'>মাসের নাম</th>
                        <th className='text-primary'>ভাউচার নং</th>
                        <th className='text-primary'>টাকার পরিমান</th>
                        
                    </tr>
                                                 
                </thead>
                <tbody>
                {                
                        userData.map((user, index) => (
                            <tr key={index} >
                                    <td className="text-success"> {user.date} </td>
                                    <td className="text-success"> {user.name} </td>
                                    <td className="text-success"> {user.email} </td>
                                    <td className="text-success"> {user.month} </td>
                                    <td className="text-success"> {user.voucher} </td>
                                    <td className="text-success"> {user.amount} </td>
                                    
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default Users;