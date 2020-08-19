import React from 'react';

import FormInput from '../FormInput/FormInput.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../FireBase/firebase.util';
import {useState} from 'react';

import './sign-up.styles.scss';

export default function SignUp() {
  
    const [User,setUser] = useState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  

  const handleSubmit = async event => {
    event.preventDefault();
 


    if (User.password !== User.confirmPassword) {
      alert("passwords don't match");
          return;
    }
    console.log(User);
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        User.email,
        User.password,
        
      ).then(function(result) {
        console.log(result);
        return result.user.updateProfile({
          displayName: User.displayName
        })

        

      });
    console.log(user);
    
      await createUserProfileDocument(user,User.displayName);
      
      setUser({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
      console.log(User);
    } catch (error) {
      console.error(error);
    }
  };

  function handleChange(event) {
    const { name, value } = event.target;

    setUser({...User,[name]:value});
  };

    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={User.displayName}
            handleChange={handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={User.email}
            handleChange={handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={User.password}
            handleChange={handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={User.confirmPassword}
            handleChange={handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
  
}
