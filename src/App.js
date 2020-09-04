import React from 'react';
import './App.css';
import {Route,Redirect} from 'react-router-dom';
import HomePage from './Pages/HomePage/Homepage.component';
import ShopComponent from './Pages/Shop/shop.component';
import Header from './Components/Headers/header.component';
import {Switch} from 'react-router-dom';
import {useEffect} from 'react';
import {useState} from 'react';
import {auth} from './Components/FireBase/firebase.util';
import {createUserProfileDocument} from './Components/FireBase/firebase.util';
import {connect} from 'react-redux';
import SignInAndSignUpPage from './Pages/Sign-In and Sign-Up/sign-in-and-sign-up.component';
import {setCurrentUser} from './Components/Redux/Users/user.action';

import { createStructuredSelector } from 'reselect';
import {selectCurrentUser} from '../src/Components/Redux/Users/user.selectors';
import Checkout from './Components/Checkout/checkout.component';
import CollectionCategory from './Components/CollectionCategory/collectionCategory.component';
import CollectionPage from './Pages/Collection/collection.component';

function App(props) {

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
          props.setCurrentUser({ // Now here whenever our user snapshot updates we're setting the user reducer value
          // with our new object and we can see this in our application because of our null 
                  
              id: snapShot.id,
              ...snapShot.data()
            }
          );

          
        });
      }
      props.setCurrentUser(userAuth);
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
      <Header />
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/shop" component={ShopComponent} />
      <Route path="/signin" render={()=>props.currentUser?(<Redirect to="/" />):( <SignInAndSignUpPage/>)}/>
      <Route exact path="/checkout" component={Checkout}/>
      <Route path="/shop/:collectionId" component={CollectionPage} />
      </Switch>
    </div>
  );
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});


const mapDispatchToProps = dispatch => {
   console.log("MSTP App.js");
  return{
  setCurrentUser: user => dispatch(setCurrentUser(user)) // here what dispatch is it's a way for redux to know that whatever you're
  //passing me whatever object you're passing me is going to be an action object that I'm going to pass to every reducer and here
  // our user action that gets the "user" but returns an action object and here we gonna call our action which is setCurrentUser() and 
  //passing user and that "user" can be used as payload in the action. 
  }
};

export default connect(
  mapStateToProps, // First argument is null because we don't any state as here in the App component from our reducer 
  // we are just setting the value of the currentUser state and we were passing to the Header component earlier
  mapDispatchToProps
)(App);