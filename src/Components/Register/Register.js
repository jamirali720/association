import React from 'react';

import {createUserWithEmailAndPassword, getIdToken, GoogleAuthProvider, signInWithPopup, updateProfile} from 'firebase/auth';
import auth from './FirebaseConfigs';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {useContext} from 'react';
import { AiOutlineGoogle } from 'react-icons/ai';
import {userContext} from '../../App';
import { useForm } from 'react-hook-form';

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const Register = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const navigate = useNavigate();
    const location = useLocation(); 
   
    let {from } = location.state || {from:  {pathName : '/'}}  
   
    const {handleSubmit, register, formState: { errors }} = useForm();
    
  
    
    const onSubmit =(data) => {     
       
        if(data.confirm_password !== data.password) {
             toast("message: password not matched");
        }else {
            createUser(data)
        }       
    }
    const createUser = async(data) => {       
        await createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((result) => {
            const user = result.user;
            updateProfile(auth.currentUser, {
                displayName: data.name
            })
            errorHandler(user, null)   
            navigate(from)         
            const {email, displayName, photoURL }= user;           
            const signedInUser = {name: displayName, email, photoURL };
            setLoggedInUser(signedInUser)
           
            
        })      
      
       .catch(error => {
           errorHandler(null, error)
       })           
  }

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            const {email, displayName, photoURL }= user;
           
            const signedInUser = {name: displayName, email, photoURL };
            setLoggedInUser(signedInUser)
            errorHandler(user, null)   
            navigate(from) 
          

           
        }).catch(error => {
            errorHandler( null, error)  
        })
    }


    const errorHandler =(success, error ) => { 
          
        if(success) {
            toast.success('You have registered successfully', {position: toast.POSITION.TOP_CENTER})  
            getIdToken(success)
            .then(idToken => sessionStorage.setItem('token', idToken))          
           
        }else if(error.code === 'auth/weak-password'){
                    toast.error('Password must be greaten than 6 character or equal', {position: toast.POSITION.TOP_CENTER})
        }else if(error.code === 'auth/email-already-in-use'){
                    toast.error('This email already exist. Try with another email', {position: toast.POSITION.TOP_CENTER})
        }else{
            toast.error('something wrong', {position: toast.POSITION.TOP_CENTER})
        }
        
    }
    

  console.log(loggedInUser)
    return (
        <div className="main-div">
        <div className="container">
            <div className="row">                       
                <div  className="col-md-6 col-sm-12 m-auto mt-5 ">
                    <div className="card shadow-lg w-75 ms-5 bottom-items">                  
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
                            
                        <button className="mb-4 btn btn-primary" onClick={() => googleSignIn()}><AiOutlineGoogle className="google-icon me-1 text-white fs-3" /> Login with Google account</button>
                            
                        </div>
                    </div>
                 
                   
                </div>


            </div>
        </div>
</div>
    );
};

export default Register;