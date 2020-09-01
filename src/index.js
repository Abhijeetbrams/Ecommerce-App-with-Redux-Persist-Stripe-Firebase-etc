import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './Components/Redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor} from './Components/Redux/store';


ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
       
      <PersistGate persistor={persistor}>
         <App />
         </PersistGate>
      </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

// We're wrapping our app into persistGate in order to gave access of persistance flow to the app// means what it will do it will allow the persist gate to actually receive the store and also fireoff action that will Re-Hydrate the state // whenever our application refreshes 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
