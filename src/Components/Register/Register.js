import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineGoogle } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import Spinner from 'react-bootstrap/Spinner'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../useAuth/useAuth';


toast.configure();

const Register = () => {
   
    const {registerUser,handleGoogleSignedIn, error, user, loading} =useAuth()
    const navigate = useNavigate();
    const location = useLocation();    
  
   
    const {handleSubmit, register, formState: { errors }} = useForm();
      
    
    const onSubmit =(data) => {        
        if(data.confirm_password !== data.password) {
             toast("message: password not matched");
        }else {
            registerUser(data.name, data.email, data.password, navigate, location)
        }       
    }

 

    return (
        <div className="main-div">
        <div className="container">
            <div className="row">                       
                <div  className="col-md-6 col-sm-12 m-auto mt-5 ">
                    {error && <h3> {error}</h3>}
                    {
                        user.email && toast.success('You have registered successfully', {position: toast.POSITION.TOP_CENTER})
                    }
              { !loading ? <div className="card shadow-lg w-75 ms-5 bottom-items">                  
                        <h2 className="me-auto ms-3 text-secondary mb-3"> Register</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="name-container my-2 m-auto w-75">
                        <input className="form-control" type="text" {...register("name", {required: true})} placeholder="Please Enter Your Name" />
                            {errors.name &&  <span className="text-danger"> Name is required</span> }
                        </div>
                        <div className="name-container my-2 m-auto w-75">
                        <input className="form-control" type="email" {...register("email", {required: true})} placeholder="Please Enter Your Email" />
                            {errors.email &&  <span className="text-danger"> Email is required</span> }
                        </div>
                        <div className="name-container my-2 m-auto w-75">
                        <input className="form-control" type="password" {...register("password", {required: true})} placeholder="Please Enter Your Password" />
                            {errors.password &&  <span className="text-danger"> Password is required</span> }
                        </div>
                        <div className="name-container my-2 m-auto w-75">
                        <input className="form-control" type="password" {...register("confirm_password", {required: true})} placeholder="Please Enter Your Confirm Password" />
                            {errors.confirm_password &&  <span className="text-danger">Confirm Password is required</span> }
                        </div>
                        <div className="btn-container my-2 m-auto w-75">
                            <button type="submit" className="btn btn-primary form-control btn-submit">Submit</button>
                        </div>
                       
                    </form>
                    <div> <span> Already have an account?</span> <Link className="text-decoration-none" to="/login"> Sign In</Link> </div>
                  

                        <div className="d-flex mx-auto">  <div className="div1 mt-2 me-1"></div> <small> OR Register with </small><div className="div2 mt-2 ms-1"></div></div>
                        <div className="social-container mt-2">     
                        <button className="mb-4 btn btn-primary" onClick={() => handleGoogleSignedIn(navigate, location)}><AiOutlineGoogle className="google-icon me-1 text-white fs-3" /> Login with Google account</button>
                            
                        </div>
                    </div> : <Spinner animation="border"/>
                 }
                   
                </div>


            </div>
        </div>
</div>
    );
};

export default Register;