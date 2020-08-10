import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import HomePage from './Pages/HomePage/Homepage.component';
import ShopComponent from './Pages/Shop/shop.component';
import Header from './Components/Headers/header.component';
import {Switch} from 'react-router-dom';
import  SignIn from './Pages/SignIn.component';


function App() {
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/shop" component={ShopComponent} />
      <Route path="/signin" component={SignIn}/>
      </Switch>
    </div>
  );
}

export default App;