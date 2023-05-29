import React, {useEffect, useState} from 'react';
import Navbar from "./Navbar"
const Home = () => {
    const [usersList, setUsersList] = useState([])
    useEffect(() =>{
      const refreshList =()=>{
        fetch('https://association-server.onrender.com/getAllUsers')
        .then(res => res.json())
        .then(users => setUsersList(users))
      }
      refreshList();
    }, [])
    
    return (
        <main>
            <Navbar/>
        <div className="container">        
            <div>
            <h2 className="text-danger my-2"> আমাদের সর্বমোট ডোনার সংখ্যা : {usersList.length} জন </h2>
            </div>
           
            <div className="d-flex justify-content-between flex-wrap table-responsive-sm">                 
                <table className="table bg-light table-bordered">
                    <thead>
                        <tr>
                             <th>ডোনার নাম</th>
                             <th>ই-মেইল</th>
                             <th>মোবাইল </th>
                             <th>জমার পরিমান </th>
                             <th>ঠিকানা</th>
                             <th>তারিখ</th>   
                        </tr>
                                                       
                    </thead>
                    <tbody>
                    {                
                            usersList.map((user, index) => (
                                <tr key={index} >
                                        <td className="text-success"> {user.name} </td>
                                        <td className="text-success"> {user.email} </td>
                                        <td className="text-success"> {user.phone} </td>
                                        <td className="text-success"> {user.donation} </td>
                                        <td className="text-success"> {user.address} </td>
                                        <td className="text-success"> {user.date} </td>
                                </tr>
                            ))
                    
                    }
                    </tbody>
                </table>
            </div>
           
        </div>
        </main>
    );
};

export default Home;