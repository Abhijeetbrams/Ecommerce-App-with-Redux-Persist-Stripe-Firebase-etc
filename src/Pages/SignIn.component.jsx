import React from 'react';
import {useState} from 'react';
import FormInput from '../Components/FormInput/FormInput.component';
import CustomButton from '../Components/custom-button/custom-button.component';
export default function SignIn()
{
    const[forInp,setForm]=useState({
        email:"",
        password:""
    });
    
    function handleChange(event)
    {
        setForm({
            ...forInp,
            [event.target.name]:event.target.value});
    }

    function handleSubmit(event)
    {
        event.preventDefault();
        setForm({email:"",password:""})
       
    }   
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <FormInput type="email" name="email" value={forInp.email}  handleChange={handleChange} label="Email"/>
                <FormInput type="Password" name="password" value={forInp.password}  handleChange={handleChange} label="Password"/>
                <CustomButton type="submit" name="Submit" >Sign In</CustomButton>
                </form>
            </div>
    );
}