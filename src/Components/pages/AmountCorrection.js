import React, { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const AmountCorrection = () => {
    const navigate = useNavigate();
    const [amountInfo, setAmountInfo] =  useState([]);
    const { name, email, month, date, amount, voucher, total} = amountInfo;
    const {correctionId}= useParams();
      
   
      useEffect(()=> {            
        const updated =async()=> {
            await fetch(`https://association-server.onrender.com/allAmount/${correctionId}`)
            .then(res => res.json())
            .then(res => setAmountInfo(res[0]))
        }
        setInterval(()=> {
            updated();
        }, 5000)
      },[correctionId])
     

      const d = new Date();
      const today = d.toLocaleString();

    const {handleSubmit, register,reset, formState: {errors}} = useForm();
    const onSubmit = (data) => {   
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('month', data.month);
        formData.append('voucher', data.voucher);
        formData.append('amount', data.amount);
        formData.append('date', data.date);
        formData.append('total', data.total);
        formData.append('updatedAt', today);

        fetch(`https://association-server.onrender.com/allAmount/${correctionId}`, {
            method: "PATCH",                 
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            if(data === true){                
                toast.success('You have updated successfully', {position:toast.POSITION.TOP_CENTER});
                navigate('/dashboard/correction');
                reset();
            }
        })
        

    }
   


 
    return (
        <div className="main bg-info rounded-3 amount-correction" style={{width: 700, height: 600, margin: "auto", marginTop: 120}}>
            <div className="header">
                <h2 className="py-2 text-white"> Update A amount Information </h2>
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
                        <input  defaultValue={month} type="tel" {...register('month', {required: true})} className="form-control" placeholder='Enter Month' />
                        {errors.month && <span className="text-danger"> Month is Required </span>}
                    </div>
                    <div className="form-group w-50 mx-auto mt-4">
                        <input defaultValue={voucher} type="text"  {...register('voucher', {required: true})} className="form-control" placeholder="Enter Your voucher Number" />
                        {errors.voucher && <span className="text-danger"> Voucher is Required </span>}
                    </div>
                    <div className="form-group w-50 mx-auto mt-4">
                        <input defaultValue={amount} type="text" placeholder='Enter Amount'  {...register('amount', {required: true})} className="form-control"  />
                        {errors.amount && <span className="text-danger"> Amount is Required </span>}
                    </div>
                    <div className="form-group w-50 mx-auto mt-4">
                        <input type="text" placeholder='Enter DAte'  defaultValue={date} {...register('date', {required: true})} className="form-control"  />
                        {errors.date && <span className="text-danger"> Date is Required </span>}
                    </div>
                    <div className="form-group w-50 mx-auto mt-4">
                        <input defaultValue={total} type="text" placeholder='Enter total amount'  {...register('total', {required: true})} className="form-control"  />
                        {errors.total && <span className="text-danger"> Total is Required </span>}
                    </div>
                    <div className="form-group w-50 mx-auto mt-4">
                        <button type="submit"  className="form-control btn btn-success" > Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AmountCorrection;