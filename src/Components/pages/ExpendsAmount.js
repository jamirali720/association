import React from 'react';
import { useForm } from 'react-hook-form';

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const ExpendsAmount = () => {
    const {handleSubmit, register, formState: {errors}} = useForm();
    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('name', data.name);    
        formData.append('amount', data.amount);      
        formData.append('date', data.date);
        formData.append('voucher', data.voucher);
        

        fetch('https://olama-kollan-association.herokuapp.com/addExpendsAmount' , {
            method: "POST",          
            body: formData           
        })
        .then((response) => response.json())
        .then((data) =>{           
            if(data === true) {
                toast.success(' Expense Amount has been added successfully', {position: toast.POSITION.TOP_CENTER})
            }else {
                toast.danger('Something went wrong !', {position: toast.POSITION.TOP_CENTER})
            }
        } )
        .catch(error =>{
            if(error ){
                console.log(error)                
            }
        })
    }

    const d = new Date();
    const today = d.toLocaleString();
  
    return (
        <div className="main bg-info rounded-3" style={{width: 700, height: 400, margin: "auto"}}>
            <div className="header">
                <h2 className="py-2 text-warning"> Add Your Expense Amount </h2>
            </div>
            <div className="form-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group w-50 mx-auto mt-4">
                        <input type="text" {...register('name', {required: true})} className="form-control" placeholder='Enter expense title' />
                        {errors.name && <span className="text-danger"> Expense title is Required </span>}
                    </div>
                  
                    <div className="form-group w-50 mx-auto mt-4">
                        <input type="text" {...register('amount', {required: true})} className="form-control" placeholder='Enter Expense  Amount' />
                        {errors.amount && <span className="text-danger"> Expense Amount is Required </span>}
                    </div>                 
                
                    <div className="form-group w-50 mx-auto mt-4">
                        <input type="text"  {...register('voucher', {required: true})} className="form-control" placeholder="Enter Voucher Number"  />
                        {errors.voucher && <span className="text-danger"> Voucher Number is Required </span>}
                    </div>
                    <div className="form-group w-50 mx-auto mt-4">
                        <input type="text" value={today} {...register('date', {required: true})} className="form-control"  />
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

export default ExpendsAmount;