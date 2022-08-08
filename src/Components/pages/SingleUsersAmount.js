import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import '../Global/Global.css'
const SingleUsersAmount = () => {
    const Navigate = useNavigate();
    const [amount, setAmount] =  useState([])



useEffect(() => {
    fetch(`http://localhost:5500/allAmount`)
        .then(res => res.json())
        .then(data => setAmount(data))
},[])

    const handleUpdate = (id) => {
        Navigate(`/dashboard/${id}`)
    }


    return (
        
        <div className="m-3">
        <h1> All Amount Information </h1>
        <div className="d-flex justify-content-around flex-wrap table-container single-user">                 
            <table className="table bg-light table-bordered">
                <thead>
                    <tr>
                        <th className='text-primary'>তারিখ</th>     
                        <th className='text-primary'>নাম</th>
                        <th className='text-primary'>ই-মেইল</th>
                        <th className='text-primary'>মাসের নাম</th>
                        <th className='text-primary'>ভাউচার নং</th>
                        <th className='text-primary'>টাকার পরিমান</th>
                        <th className='text-primary'>Updated</th>
                        <th className='text-primary'>Action</th>
                      
                        
                    </tr>
                                                 
                </thead>
                <tbody>
                {                
                        amount.map((item, index) => (
                            <tr key={index} >
                                    <td className="text-success"> {item.date} </td>
                                    <td className="text-success"> {item.name} </td>
                                    <td className="text-success"> {item.email} </td>
                                    <td className="text-success"> {item.month} </td>
                                    <td className="text-success"> {item.voucher} </td>
                                    <td className="text-success"> {item.total} </td>
                                    <td className="text-success"> {item.updatedAt} </td>
                                    <td className="text-success"> <button onClick={() => handleUpdate(item._id)} 
                                    className='btn btn-primary'
                                    > Update</button></td>
                                   
                                    
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default SingleUsersAmount;