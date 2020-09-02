import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import userReducer from './Users/user.reducer';
import Toggle from './Cart/cart.reducer';

import { persistReducer } from 'redux-persist';
import ShopReducer from './Shop/shop.reducer';

const persistConfig={
  key:"root", // this means at what point inside of our reducer object do we want to start storing everything and
   // we want to start from the root 
  storage,// storage or the type of storage we have imported 
  whitelist:['toggle']// this contain the string name of any of the reducer we want to store
   // Here we have user and cart but as user reducer is already persisted with the Firebase so we only want cart reducer to store in
  // local storage and if we want to add any of the reducer again then we will pass inside this array with comma seperated.
};

const  rootReducer= combineReducers({ //Here uses combine reducers to create actual root reducer object.
  user: userReducer,
  toggle:Toggle,
  shop:ShopReducer
});

export default persistReducer(persistConfig,rootReducer);
// Now we will get our Modified root reducer with persist config on the top of it.