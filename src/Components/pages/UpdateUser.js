import React, { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const UpdateUser = () => {
    const navigate = useNavigate();
    const [member,setMember] =  useState([]);
    const { name, email, phone, address, donation} = member;
      const {userId}= useParams();
   
      useEffect(()=> {            
        const updated =async()=> {
            await fetch(`http://localhost:5500/getMember/${userId}`)
            .then(res => res.json())
            .then(res => setMember(res[0]))
        }
        setInterval(()=> {
            updated();
        }, 5000)
      },[userId])

    const {handleSubmit, register, formState: {errors}} = useForm();
    const onSubmit = (data) => {   
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('phone', data.phone);
        formData.append('address', data.address);
        formData.append('donation', data.donation);
        formData.append('date', data.date);

        fetch(`http://localhost:5500/updateUser/${userId}`, {
            method: "PATCH",                 
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            if(data === true){                
                toast.success('You have updated successfully', {position:toast.POSITION.TOP_CENTER});
                navigate('/dashboard/management')
            }
        })

    }
   


    const d = new Date();
    const today = d.toLocaleString();
    return (
        <div className="main bg-info rounded-3" style={{width: 700, height: 500, margin: "auto"}}>
            <div className="header">
                <h2 className="py-2 text-white"> Update A Member Information </h2>
            </div>
            <div className="form-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group w-50 mx-auto mt-4">
                        <input  defaultValue={name} type="text" {...register('name', {required: true})} className="form-control" placeholder='Enter Your Name' />
                        {errors.name && <span className="text-danger"> Name is Required </span>}
                    </div>
                    <div className="form-group w-50 mx-auto mt-4">
                        <input defaultValue={email}  type="email" {...register('email', {required: true})} className="form-control" placeholder='Enter Your Email' />
                        {errors.email && <span className="text-danger"> Email is Required </span>}
                    </div>
                    <div className="form-group w-50 mx-auto mt-4">
                        <input  defaultValue={phone} type="tel" {...register('phone', {required: true})} className="form-control" placeholder='Enter Your Mobile Number' />
                        {errors.phone && <span className="text-danger"> Phone is Required </span>}
                    </div>
                    <div className="form-group w-50 mx-auto mt-4">
                        <input defaultValue={address} type="text"  {...register('address', {required: true})} className="form-control" placeholder="Enter Your Address" />
                        {errors.address && <span className="text-danger"> Address is Required </span>}
                    </div>
                    <div className="form-group w-50 mx-auto mt-4">
                        <input defaultValue={donation} type="text" placeholder='Enter Donation Amount'  {...register('donation', {required: true})} className="form-control"  />
                        {errors.donation && <span className="text-danger"> Donation is Required </span>}
                    </div>
                    <div className="form-group w-50 mx-auto mt-4">
                        <input type="text" defaultValue={today} {...register('date', {required: true})} className="form-control"  />
                        {errors.date && <span className="text-danger"> Date is Required </span>}
                    </div>
                    <div className="form-group w-50 mx-auto mt-4">
                        <button type="submit"  className="form-control btn btn-success" > Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateUser;