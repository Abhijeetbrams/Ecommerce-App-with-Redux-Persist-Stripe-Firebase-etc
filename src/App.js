import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import HomePage from './Pages/HomePage/Homepage.component';
import ShopComponent from './Pages/Shop/shop.component';
import Header from './Components/Headers/header.component';
import {Switch} from 'react-router-dom';
import  SignIn from './Pages/SignIn.component';
import {useEffect} from 'react';
import {useState} from 'react';
import {auth} from './Components/FireBase/firebase.util';

function App() {
  const [user,setUser] =useState(null);

  useEffect(
    ()=>{
        const abortController = new AbortController();
        const signal = abortController.signal;

        auth.onAuthStateChanged(user => {
            setUser(user);
     }
     
        )
     
    return function cleanup()
    {
        abortController.abort();
    } 
    },[]);


  return (
    
    <div>
      <Header user={user}/>
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/shop" component={ShopComponent} />
      <Route path="/signin" component={SignIn}/>
      </Switch>
      {console.log(user)}
    </div>
  );
}

export default App;