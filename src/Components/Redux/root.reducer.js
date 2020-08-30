import { combineReducers } from 'redux';

import userReducer from './Users/user.reducer';
import Toggle from './Cart/cart.reducer';
export default combineReducers({ //Here uses combine reducers to create actual root reducer object.
  user: userReducer,
  toggle:Toggle
});