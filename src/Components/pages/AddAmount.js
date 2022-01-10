import React from 'react';
import { useForm } from 'react-hook-form';

const AddAmount = () => {
    const {handleSubmit, register, formState: {errors}} = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }

    const d = new Date();
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        
    let monthName = month[d.getUTCMonth()];
            console.log(monthName)
    const today = d.toLocaleString();
  
    return (
        <div className="main bg-info rounded-3" style={{width: 700, height: 500, margin: "auto"}}>
            <div className="header">
                <h2 className="py-2 text-warning"> Add Your Amount/Money </h2>
            </div>
            <div className="form-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group w-50 mx-auto mt-4">
                        <input type="text" {...register('name', {required: true})} className="form-control" placeholder='Enter Your Name' />
                        {errors.name && <span className="text-danger"> Name is Required </span>}
                    </div>
                    <div className="form-group w-50 mx-auto mt-4">
                        <input type="email" {...register('email', {required: true})} className="form-control" placeholder='Enter Your Email' />
                        {errors.email && <span className="text-danger"> Email is Required </span>}
                    </div>
                    <div className="form-group w-50 mx-auto mt-4">
                        <input type="text" {...register('amount', {required: true})} className="form-control" placeholder='Enter Amount' />
                        {errors.amount && <span className="text-danger"> Amount is Required </span>}
                    </div>
                    <div className="form-group w-50 mx-auto mt-4">
                        <input type="text" value={monthName} {...register('month', {required: true})} className="form-control"  />
                        {errors.month && <span className="text-danger"> Month is Required </span>}
                    </div>
                    <div className="form-group w-50 mx-auto mt-4">
                        <input type="text" value={today} {...register('date', {required: true})} className="form-control"  />
                        {errors.date && <span className="text-danger"> Date is Required </span>}
                    </div>
                    <div className="form-group w-50 mx-auto mt-4">
                        <button type="submit"  className="form-control" > Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAmount;