import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
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


// this is called every time when App.js is mounted as it is called in App.js but it will not create a new entry 
// every time in the firestore because it checks everytime whether a particular user is present in the firestore or not.
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; // userAuth is basically the data that we get from firebase once we logged in via Google
  //signup it's the same that we consolling in the App.js which is given by auth.onAuthStateChanged()
  // and here we also getting this from the Authentication Library.
  // and we are checking whether we are connected with FIrebase or not and if we connected we will userAuth from
  //Authentication Library from the App.js because of user persistence session means is it signed out then userAuth is null.

  const userRef = firestore.doc(`users/${userAuth.uid}`); //1. The UID is basically the dynamically generated I.D.
  // String that Google made for us when we authenticated the user using Google SignIn
  //2. Initially the user data saved in Authentication under user section but need to move into the database.
  //3. This Query reference object does not have the actual data of collection or document. It instead has
  //properties tell us details about it or the method to get the snapshot object which gives the data we are looking for.
  // here we have mentioned (collectionName/documentId) so this is document reference.
  // document.getRef - returns a documentSnapshot object. and collection.getRef - returns a collectionSnapshot object.

   console.log(userAuth);
  const snapShot = await userRef.get();
   console.log(userRef);
   console.log(snapShot);
  if (!snapShot.exists) { // In the Document reference object we have a property name "exists" that tells whether 
  //a particular document exists in the database or not.
    const {displayName,  email } = userAuth; //destructing displayName and email from the userAuth Object. 
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;