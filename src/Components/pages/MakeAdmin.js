import React from 'react';
import '../Global/Global.css'

import {useForm} from 'react-hook-form';
const MakeAdmin = () => {
    const {handleSubmit, register, formState: {errors}} = useForm();
    const onSubmit = (data) => {
       
        const fd = new FormData();
        fd.append('email', data.email);
        fetch('https://association-server.onrender.com/addAdmin' , {
            method: "POST",          
            body: fd
        })
        .then(res => {
            console.log(res)
            if(res.ok){
                alert('New admin has been added successfully')
            }
        })
        .catch(error => {
            if(error.message) {
                alert('Something is wrong')
            }
        })
    }
    return (
        <div className="bg-warning  m-auto rounded-3 make-admin">
            <div className="form-container">
                <div className="header py-3">
                    <h2> Make an admin </h2>
                </div>
                <div className="form-group pb-3">
                  <form onSubmit={handleSubmit(onSubmit)}>
                  <input type="email" className="form-control w-75 m-auto" {...register('email', {required: true})} placeholder="Enter Your Email" />
                  {errors.email && <span className="text-danger"> Email is Required </span>}
                    <button type="submit" className="btn btn-success form-control w-75 m-auto my-3 ">
                       Submit
                    </button>
                  </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;

