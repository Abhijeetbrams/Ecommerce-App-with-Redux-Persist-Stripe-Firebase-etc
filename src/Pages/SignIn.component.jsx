import React from 'react';
import {useState} from 'react';
import FormInput from '../Components/FormInput/FormInput.component';
import CustomButton from '../Components/custom-button/custom-button.component';

import {signInWithGoogle} from '../Components/FireBase/firebase.util';
import {auth} from '../Components/FireBase/firebase.util';

export default function SignIn()
{
    const[forInp,setForm]=useState({
        email:"",
        password:""
    });
    
    const isGoogleSignIn=true;
    

    function handleChange(event)
    {
        setForm({
            ...forInp,
            [event.target.name]:event.target.value});
    }

    const  handleSubmit=async(event)=>
    {
        event.preventDefault();
        auth.signInWithEmailAndPassword(forInp.email,forInp.password);
        setForm({email:"",password:""})
       
    }   

    
    return(
        <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput type="email" name="email" value={forInp.email}  handleChange={handleChange} label="Email"/>
                <FormInput type="Password" name="password" value={forInp.password}  handleChange={handleChange} label="Password"/>
                <CustomButton type="submit" name="Submit" >Sign In</CustomButton>
                <CustomButton onClick={signInWithGoogle}  isGoogleSignIn>gOOGLE sIGN iN</CustomButton>
                
                </form>
            </div>
    );
}