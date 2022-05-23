import React, { useContext } from 'react';
import { signInWithEmailAndPassword , signInWithPopup, GoogleAuthProvider,} from "firebase/auth";
import auth from '../Register/FirebaseConfigs';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineGoogle } from 'react-icons/ai';
import { userContext } from '../../App';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const Login = () => {    
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const navigate = useNavigate();
    const {handleSubmit, register, formState: { errors }} = useForm();
   
    let location = useLocation()  
    let { from } = location.state || { from: { pathname: "/" } }

    //form  submit function
    const onSubmit =(data) => {        
         loginUser(data)
         sessionStorage.setItem('name', data.name)
    }   
   
    // login function 
    const loginUser =(data) => {       
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            const user = userCredential.user;   
            errorHandler(user, null)   
            const {email, displayName, photoURL, token }= user;
           
            const signedInUser = {name: displayName, email, photoURL, token };
            setLoggedInUser(signedInUser)
            navigate(from)   
            storeAuthToken()              
        })
        .catch((error) => {        
            errorHandler(null, error)           
        });
    }



    // login with google;
    const signInWithGoogle =()=> {      
        const provider = new GoogleAuthProvider(); 
        signInWithPopup(auth, provider)        
        .then((result) => {                         
            const user = result.user;  
            const {email, displayName, photoURL, token}= user;
           
            const signedInUser = {name: displayName, email, photoURL, token};
            setLoggedInUser(signedInUser) 
            navigate(from)
            errorHandler(user, null)   
            storeAuthToken()
            
        })
        .catch((error) => {    
            errorHandler(null, error)                       
        });
    }
    const errorHandler =(success, error ) => {       
        if(success) {
            toast.success('You have logged in successfully', {position: toast.POSITION.TOP_CENTER})            
           
        }
        else if(error.code === 'auth/user-not-found') {
            toast.success('User not found with this email',{position: toast.POSITION.TOP_CENTER})
        }
        else if(error.code === 'auth/wrong-password') {           
            toast.success('wrong-password', {position: toast.POSITION.TOP_CENTER})
        }else{
            toast.success('something wrong !', {position: toast.POSITION.TOP_CENTER})
        }
        
    }
    const storeAuthToken = () => {
        auth.currentUser.getIdToken()
        .then(idToken => sessionStorage.setItem('token', idToken))

    }

console.log(loggedInUser)
    return (
        <div className="main-div ">
                <div className="container">                       
                    <div className="row">                       
                        <div  className="col-md-6 col-sm-12 m-auto mt-5 ">
                            <div className="card shadow-lg w-75 ms-5 bottom-items">                            
                                <h2 className="ms-3 text-secondary mb-3"> Login</h2>
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
                         
                                <div className="d-flex mx-auto">  <div className="div1 mt-2 me-1"></div> <small> OR Register with </small><div className="div2 mt-2 ms-1"></div></div>
                                <div className="social-container mt-2">
                                  
                                    <button className="mb-4 btn btn-primary" onClick={() => signInWithGoogle()}><AiOutlineGoogle className="google-icon me-1 text-white fs-3" /> Login with Google account</button>
                                  
                                </div>
                            </div>
                         
                           
                        </div>


                    </div>
                </div>
        </div>
    );
};

export default Login;