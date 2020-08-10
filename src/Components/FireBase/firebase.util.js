import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCeHYh9WYswWRO69UF8wjTfhK8YXdc7M10",
    authDomain: "clothingecom-signin.firebaseapp.com",
    databaseURL: "https://clothingecom-signin.firebaseio.com",
    projectId: "clothingecom-signin",
    storageBucket: "clothingecom-signin.appspot.com",
    messagingSenderId: "150267270963",
    appId: "1:150267270963:web:e188327556e8ffbb099046",
    measurementId: "G-Z1CVYEVYKN"
  };
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;