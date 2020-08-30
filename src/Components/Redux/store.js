import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; // This middleware catches the action and console logs out for us and then moves to root reducer.


import rootReducer from './root.reducer';

const middlewares = [logger]; // Middleware to our store so that whenever  action gets fired dispatched we can catch them or display them 
//Middleware is that recieve action in and then do something with them and then pass them out to the root reducer.
// Middleware is an array that contains middlewares

const store = createStore(rootReducer, applyMiddleware(...middlewares));// passing all the element of the middlewares array
// as indiviual argument and we're instantiating store object via createStore method.

export default store;// Now this store is used in the Provider mentioned in the Index.js