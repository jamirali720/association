import React, { useEffect, useState } from 'react';
import '../Global/Global.css'
import {  toast } from 'react-toastify';





const DeleteBenefit =() => {  
    const [benefit, setBenefit] = useState([]);

    useEffect(() => {
        const refreshList = ()=> {
            fetch('https://association-server.onrender.com/benefitMoney')
            .then(res => res.json())
            .then(data => setBenefit(data));
        }      
      
       refreshList();
    }, [])


    const handleDelete =(id)=> {       
        if(window.confirm('Are you sure you want to delete ?')){
            fetch(`https://association-server.onrender.com/deleteBenefitMoney/${id}`, {
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
        setBenefit(money => money.filter(item => item._id !== id ))   
    }


   
   

    return (
        <div className=""> 
             <div className="table-responsive overflow-scroll">                 
            <table className="table bg-light table-bordered table-responsive{-sm|-md|-lg|-xl}">
                <thead>
                    <tr>
                        <th>নাম</th>
                        <th>টাকার পরিমান</th>
                        <th>ভাউচার</th>                                                  
                        <th>Action</th>    
                    </tr>                                                  
                </thead>

                <tbody>
                {                
                        benefit.map((item, index) => (
                            <tr key={index} >
                                    <td className="text-success"> {item.name} </td>
                                    <td className="text-success"> {item.amount} </td>
                                    <td className="text-success"> {item.voucher} </td>
                                    
                                    <td> 
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-danger"> Delete</button> 
                                                          
                                    </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        </div>
    )
}


export default DeleteBenefit;