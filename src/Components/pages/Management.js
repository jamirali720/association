import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Global/Global.css'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

// heroku link here
// https://olama-kollan-association.herokuapp.com


const Management =() => {
   const navigate = useNavigate();
    const [usersList, setUsersList] = useState([]);
    useEffect(() => {
        const refreshList = ()=> {
            fetch('https://association-server.onrender.com/getAllUsers')
            .then(res => res.json())
            .then(users => setUsersList(users));
        }      
       setInterval(()=> {
        refreshList();
       }, 5000)
    }, [])


    const handleDelete =(id)=> {       
        fetch(`https://association-server.onrender.com/userDelete/${id}`, {
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


    const handleUpdate =(id) => {
        console.log(id)
        navigate(`/dashboard/${id}`)
    }
   

    return (
        <div className="container"> 
             <div className="d-flex justify-content-between flex-wrap">                 
            <table className="table bg-light table-bordered table-responsive{-sm|-md|-lg|-xl}">
                <thead>
                    <tr>
                    <th>নাম</th>
                         <th>ই-মেইল</th>
                         <th>ঠিকানা</th>
                         <th>মোবাইল</th>
                         <th>তারিখ</th>                             
                         <th>Action</th>    
                    </tr>                                                  
                </thead>

                <tbody>
                {                
                        usersList.map((user, index) => (
                            <tr key={index} >
                                    <td className="text-success"> {user.name} </td>
                                    <td className="text-success"> {user.email} </td>
                                    <td className="text-success"> {user.address} </td>
                                    <td className="text-success"> {user.phone} </td>
                                    <td className="text-success"> {user.donation} </td>
                                    <td className="text-success"> {user.date} </td>
                                    <td> 
                                    <button onClick={() => handleDelete(user._id)} className="btn btn-danger"> Delete</button> 
                                    <button onClick={() => handleUpdate(user._id)} className="btn btn-success">Update</button>                                
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

export default Management;