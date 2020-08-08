import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import HomePage from './Pages/HomePage/Homepage.component';
import ShopComponent from './Pages/Shop/shop.component';

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage}/>
      <Route path="/shop" component={ShopComponent} />
    </div>
  );
}

export default App;