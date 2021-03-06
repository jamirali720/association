import { createUserWithEmailAndPassword, getIdToken, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import auth from '../Register/FirebaseConfigs';

const UseFirebase = () => {
    const [user, setUser]=  useState({})
    const [error,setError ] =  useState('')
    const [loading,setLoading] =useState(true);
    const gProvider = new GoogleAuthProvider();


    const registerUser = async (name, email, password, navigate, location) => {
        setLoading(true)
        let {from} =location.state  || {from: {pathname: '/'}}
        await createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            updateProfile(auth.currentUser,{
                displayName: name,                             
            })
            setError('')
            navigate(from)
        }).catch(error=> {
            setError(error.message
                )
        })
        .finally(() => setLoading(false))
    }
    const loginUser = async(email, password, navigate, location) => {
        let {from} =location.state  || {from: {pathname: '/'}}
        setLoading(true)
        await signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            setError('')
            navigate(from)
        })
        .catch(error => {
            setError(error.message)
        })
        .finally(() => setLoading(false))
    }


    const handleGoogleSignedIn = async(navigate, location) => {
        setLoading(true)
        let {from} =location.state  || {from: {pathname: '/'}}
        await signInWithPopup(auth, gProvider )
        .then(result => {
            setError('')
            navigate(from)
        }).catch(error => {
            setError(error.message)
        })
        .finally(()=> setLoading(false))
    }

    const logoutUser = async(navigate) => {
        signOut(auth)
        .then(()=> {
            sessionStorage.removeItem('token')            
            navigate('/')
            setUser('')
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user)
                getIdToken(user)
                .then(idToken => sessionStorage.setItem('token', idToken))
            }else{
                setUser({})
            }
            setLoading(false)
        })
        return () => unsubscribe;
    } ,[])

    return {
        user, 
        error, 
        loading, 
        registerUser, 
        loginUser, 
        logoutUser,
        handleGoogleSignedIn,

    }
};

export default UseFirebase;