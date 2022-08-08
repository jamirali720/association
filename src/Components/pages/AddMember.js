import React from 'react';
import {useForm} from 'react-hook-form';
import '../Global/Global.css'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();


const AddMember = () => {
    
    const {handleSubmit, register, formState: {errors}} = useForm();
    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('phone', data.phone);
        formData.append('address', data.address);
        formData.append('date', data.date);
        formData.append('donation', data.donation);
       

        fetch('https://olama-kollan-association.herokuapp.com/addMember' , {
            method: "POST",          
            body: formData
        })
        .then(res => res.json())
        .then(res => {           
            if(res === true){
                toast.success('Member has been added successfully', {position: toast.POSITION.TOP_CENTER});
            }
        })
        .catch(error => {
            if(error.message) {
                alert('Something is wrong')
            }
        })
    }


    const d = new Date();
    const today = d.toLocaleString();
   

    return (
        <div className="main bg-warning rounded-3 member-add" style={{width: 700, height: 500, margin: "auto"}}>
            <div className="header">
                <h2 className="py-2 text-white"> Add A Member </h2>
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
                        <input type="tel" {...register('phone', {required: true})} className="form-control" placeholder='Enter Your Mobile Number' />
                        {errors.phone && <span className="text-danger"> Phone is Required </span>}
                    </div>
                    <div className="form-group w-50 mx-auto mt-4">
                        <input type="text"  {...register('address', {required: true})} className="form-control" placeholder="Enter Your Address" />
                        {errors.address && <span className="text-danger"> Address is Required </span>}
                    </div>
                    <div className="form-group w-50 mx-auto mt-4">
                        <input type="text" value={today} {...register('date', {required: true})} className="form-control"  />
                        {errors.date && <span className="text-danger"> Date is Required </span>}
                    </div>
                    <div className="form-group w-50 mx-auto mt-4">
                        <input type="text" placeholder="Donation Amount"  {...register('donation', {required: true})} className="form-control"  />
                        {errors.donation && <span className="text-danger"> Donation is Required </span>}
                    </div>
                    <div className="form-group w-50 mx-auto mt-4">
                        <button type="submit"  className="form-control btn btn-success" > Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddMember;