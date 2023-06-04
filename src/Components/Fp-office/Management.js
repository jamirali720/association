import React from 'react';
import useFpProvider from '../FpProvider/useProvider';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../utils/Loader';

const Management = () => {  
    const {allInfo, setAllInfo, loading} = useFpProvider();
    const navigate = useNavigate();

    if(loading) return <Loader/>
    
    const handleEdit = (id) => {
        navigate(`/fp/dashboard/update/${id}`)
    }

    const handleDelete = (id) => {        
        if(window.confirm("Are You sure you want to delete ?")){
          fetch(`https://association-server.onrender.com/delete/${id}`, {
            method: "DELETE",         
        })
          .then((response) => response.json())
          .then((data) => {          
            if (data.success === true) {
              toast.success(data.message, {
                position: toast.POSITION.TOP_CENTER,
              });   
              navigate('/fp/dashboard')                   
            } else {
              toast.error("Something went wrong !", {
                position: toast.POSITION.TOP_CENTER,
              });
            }
          })
          .catch((error) => {
            if (error) {
              console.log(error);
            }
          });
        }
        setAllInfo(infos=> infos.filter(info => info._id !== id))
      };
    

    return (
        <main>
            <section className='overflow-scroll'>
                <table className='table table-bordered table-hover'>
                    <thead>
                        <tr className='text-primary'>
                            <th>Name </th>
                            <th> Union</th>
                            <th> Unit</th>
                            <th>Year </th>
                            <th>Month </th>                            
                            <th>Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allInfo && allInfo.map((item, index) => (
                                <tr key={index} className='text-success'>
                                    <td>{item.name}</td>
                                    <td>{item.union} </td>
                                    <td>{item.unit} </td>
                                    <td>{item.year} </td>
                                    <td>{item.month} </td>
                                    
                                    <td>
                                        <button onClick={()=> handleEdit(item._id)} className="btn btn-primary"> Edit</button>    
                                        <button onClick={()=> handleDelete(item._id)} className="btn btn-danger">Delete</button>    
                                     </td>                                    
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        </main>
    );
};


export default Management;