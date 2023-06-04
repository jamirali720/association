import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify";

import '../Global/Global.css'
const SingleUsersAmount = () => {
    const Navigate = useNavigate();
    const [amount, setAmount] =  useState([]);
    const [filterName, setFilterName] =  useState(null);
    const [searchValue, setSearchValue] = useState('')




useEffect(() => {
    fetch(`https://association-server.onrender.com/allAmount`)
        .then(res => res.json())
        .then(data => {
            setAmount(data)
            setFilterName(data)
        })
},[])

    const handleUpdate = (id) => {
        Navigate(`/dashboard/${id}`)
    }
    const handleChange = (e)=> {
      setSearchValue (e.target.value )
      
    }
    useEffect(() => {
        const filterNames = () => {
            const matchedNames = amount.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
            setFilterName(matchedNames)
        }
        filterNames()
    }, [searchValue, amount])

    const handleDelete =(id)=> { 
        if(  window.confirm("Are You sure to delete ?")){
            fetch(`http://localhost:5500/amountDelete/${id}`, {
                method: "DELETE",             
            })
            .then(res => res.json())
            .then(res => {
                console.log('the result:', res)
                if(res === true) {          
                    toast.success('You have deleted successfully', {position: toast.POSITION.TOP_CENTER})
                }
            })
        }  
        setAmount(amount => amount.filter(item => item._id !== id))
               
    }

 
    const userTotal = filterName?.reduce((total, item) => total + parseInt(item.total), 0)
  
    
    return (
        
        <div className="m-3">
        <h1> All Amount Information : {filterName?.length} Times</h1>
        <h1> Total Amount  : {userTotal} Taka</h1>
        <div>
            <input type="text" onChange={handleChange} className="form-control my-2"  placeholder="Search By Name"/>
        </div>
        <div className="overflow-scroll">                 
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
                        filterName?.map((item, index) => (
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
                                    > Update</button>
                                     <button onClick={()=> handleDelete(item._id)} 
                                    className='btn btn-danger'
                                    > Delete</button>
                                    </td>
                                   
                                    
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