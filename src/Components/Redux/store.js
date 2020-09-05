import { createStore, applyMiddleware } from 'redux';
import {persistStore} from 'redux-persist';
import logger from 'redux-logger'; // This middleware catches the action and console logs out for us and then moves to root reducer.


import rootReducer from './root.reducer';

const middlewares = [logger]; // Middleware to our store so that whenever  action gets fired dispatched we can catch them or display them 
//Middleware is that recieve action in and then do something with them and then pass them out to the root reducer.
// Middleware is an array that contains middlewares

if (process.env.NODE_ENV === 'development') {// Inside of Node.js there is a environment and Create React app sets an
    //environment variable which can only be accessed through this process and NODE_ENV will be development,production or test
    // it helps to know whether or not our app is being served in development or on which env.
    // and when we call "npm build" means NODE_ENV is "Production".
    // and when we type "npm start" and host it on our local server then this node environment variable to "Development"
    middlewares.push(logger);
  }



export const store = createStore(rootReducer, applyMiddleware(...middlewares));// passing all the element of the middlewares array
// as indiviual argument and we're instantiating store object via createStore method.

//export default store;// Now this store is used in the Provider mentioned in the Index.js

export const persistor = persistStore(store);