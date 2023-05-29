import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFpProvider from '../FpProvider/useProvider';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

const Update = () => {
    const {id} = useParams();    
    const {allInfo} = useFpProvider();
    const item = allInfo.find(item => item._id === id);
    const navigate = useNavigate();
    
   
    const {handleSubmit, register, reset, formState: {errors}} = useForm();
    const onSubmit = (data) => {   
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('phone', data.phone);
        formData.append('address', data.address);
        formData.append('donation', data.donation);
        formData.append('date', data.date);

        fetch(`http://localhost:5500/update/${id}`, {
            method: "PATCH",                 
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            if(data === true){                
                toast.success('You have updated successfully', {position:toast.POSITION.TOP_CENTER});
                navigate('/dashboard/management');
                reset();
            }
        })
    }


    return (
        <main>
             <div className="main bg-info rounded-3" style={{width: 700, height: 500, margin: "auto"}}>
            <div className="header">
                <h2 className="py-2 text-white"> Update A Member Information </h2>
            </div>
            <div className="form-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group w-50 mx-auto mt-4">
                        <input  defaultValue={item.name} type="text" {...register('name', {required: true})} className="form-control" placeholder='Enter Your Name' />
                        {errors.name && <span className="text-danger"> Name is Required </span>}
                    </div>
                    <div className="form-group w-50 mx-auto mt-4">
                        <input defaultValue={item.union}  type="email" {...register('union', {required: true})} className="form-control" placeholder='Enter Your Email' />
                        {errors.union && <span className="text-danger"> {errors.message} </span>}
                    </div>
                    <div className="form-group w-50 mx-auto mt-4">
                        <input  defaultValue={item.unit} type="tel" {...register('unit', {required: true})} className="form-control" placeholder='Enter Your Mobile Number' />
                        {errors.unit && <span className="text-danger"> unit is Required </span>}
                    </div>
                    <div className="form-group w-50 mx-auto mt-4">
                        <input defaultValue={item.month} type="text"  {...register('month', {required: true})} className="form-control" placeholder="Enter Your Address" />
                        {errors.address && <span className="text-danger"> Address is Required </span>}
                    </div>
                    <div className="form-group w-50 mx-auto mt-4">
                        <input defaultValue={item.birth} type="text" placeholder='Enter Donation Amount'  {...register('birth', {required: true})} className="form-control"  />
                        {errors.birth && <span className="text-danger"> birth is Required </span>}
                    </div>
                    <div className="form-group w-50 mx-auto mt-4">
                        <input type="text" defaultValue={item.death} {...register('death', {required: true})} className="form-control"  />
                        {errors.death && <span className="text-danger"> death is Required </span>}
                    </div>
                    <div className="form-group w-50 mx-auto mt-4">
                        <button type="submit"  className="form-control btn btn-success" > Submit</button>
                    </div>
                </form>
            </div>
        </div>
        </main>
    );
};

export default Update;