import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import HomePage from './Pages/HomePage/Homepage.component';
import ShopComponent from './Pages/Shop/shop.component';
import Header from './Components/Headers/header.component';
import {Switch} from 'react-router-dom';
import {useEffect} from 'react';
import {useState} from 'react';
import {auth} from './Components/FireBase/firebase.util';
import {createUserProfileDocument} from './Components/FireBase/firebase.util';

import SignInAndSignUpPage from './Pages/Sign-In and Sign-Up/sign-in-and-sign-up.component';

function App() {
  const [user,setUser] =useState(null);

  useEffect(
    ()=>{
        const abortController = new AbortController();
        const signal = abortController.signal;

    //     auth.onAuthStateChanged(user => {
    //         setUser(user);
    //  }   
    //    ) here we are getting the UserAuth from the Authentication Library and setting this to User state
     
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) { // check user is loggedIn or not because we get userAuth whenever we logged in.
        const userRef = await createUserProfileDocument(userAuth); // Now we're passing the userAuth data to the create
        // userProfileDocument that will check whether this particular user is present in the firestore or not. If it is
        // present then it just give the Document Reference or if not present then it will create the user in the firestore
        // then it will send the Document reference.

        userRef.onSnapshot(snapShot => { // getting snapshot from the document reference 
          setUser({
           
              id: snapShot.id,
              ...snapShot.data()
            }
          ,()=>console.log(user,App.js));

          
        });
      }
      setUser(userAuth);
    })
    return function cleanup()
    {
        abortController.abort();
    } 
    },[]);

   /*function logout()
   {
     setUser(null);
   }*/
  return (
    
    <div>
      <Header user={user} />
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/shop" component={ShopComponent} />
      <Route path="/signin" component={SignInAndSignUpPage}/>
      </Switch>
      {console.log(user)}
    </div>
  );
}

export default App;