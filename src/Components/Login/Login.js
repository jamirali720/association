import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineGoogle } from 'react-icons/ai';
import Alert from 'react-bootstrap/Alert'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from 'react-bootstrap/esm/Spinner';
import useAuth from '../useAuth/useAuth';

toast.configure();


const Login = () => {    
    const {loginUser,user, error,  loading,  handleGoogleSignedIn} = useAuth()
    const {handleSubmit, register, formState: { errors }} = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 
  

    //form  submit function
    const onSubmit =(data) => {       
        loginUser(data.email, data.password, navigate, location)       
    }        


    return (
        <div className="main-div ">
                <div className="container">                       
                    <div className="row">                       
                        <div  className="col-md-6 col-sm-12 m-auto mt-5 ">
                            <div className="card shadow-lg w-75 ms-5 bottom-items">                            
                                <h2 className="ms-3 text-secondary mb-3"> Login</h2>
                                {error && <h3> {error}</h3>}
                                
                            {user.email &&  <Alert> you have successfully logged In </Alert>}
                      {!loading ? <div>
                            <form onSubmit={handleSubmit(onSubmit)}>                         
                                <div className="name-container my-2 m-auto w-75">
                                    <input className="form-control" type="email" {...register("email", {required: true})} placeholder="Please Enter Your Email" />
                                        {errors.email &&  <span className="text-danger"> Email is required</span> }
                                </div>
                                <div className="name-container my-2 m-auto w-75">
                                        <input className="form-control" type="password" {...register("password", {required: true})} placeholder="Please Enter Your Password" />
                                        {errors.password &&  <span className="text-danger"> Password is required</span> }
                                </div>
                                
                                <div className="btn-container my-2 m-auto w-75">
                                        <button type="submit" className="btn btn-primary form-control btn-submit">Submit</button>
                                </div>                               
                            </form>
                            <div> <span> Don't have an account?</span> <Link className="text-decoration-none" to="/register"> Sign Up</Link> </div>
                         
                            <div className="mx-auto"> <small> OR Login with </small></div>
                                <div className="social-container mt-2">                                  
                                    <button className="mb-4 btn btn-primary" onClick={() => handleGoogleSignedIn(navigate, location)}><AiOutlineGoogle className="google-icon me-1 text-white fs-3" /> Login with Google account</button>
                                  
                                </div>
                            </div> : <Spinner animation="border"/>}
                            </div>
                         
                           
                        </div>


                    </div>
                </div>
        </div>
    );
};

export default Login;