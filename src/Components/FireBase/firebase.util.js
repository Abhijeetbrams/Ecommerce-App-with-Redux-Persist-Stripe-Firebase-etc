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

export const addCollectionAndItems = async(collectionKey,objectsToAdd)=> 
{
    const collectionRef =firestore.collection(collectionKey);
    console.log(collectionRef); // Here firebase will give us back a ref object but it will not create a Collection in
    // the database and when we are starting adding a doccument then it will create a Collection and document inside a firestore.
    
    // Now the issue is suppose we have large data that we are sending to the server and Now the thing about fire store 
    // is that we can only make one documentReference.set(obj) call at a time and suppose If our internet connection say 
    // stops halfway through our code only we'll have saved half those documents because the other half would not have made it to the server.
    // Now this is bad because our code becomes unpredictable.
    // We want to know that if we hit our function and all of our requests send all of them should set.
    // If any of them fail we want the whole thing to fail because then we can anticipate that right.
    // So in order to do that we have to do what's called a batch right and a batch right is essentially just
    // a way to batch or group all our calls together into one big request.
    // And fire store gives us what's called a batch object and with this batch object
    // we just add all of our for example sets(all the set call) into it and then we fired off whenever 
    // we're done adding all the calls we want to it.
    const batch =firestore.batch();
    objectsToAdd.forEach(obj=>{  // The only difference is that for each does not return us a new array the same way that .map() does
      const newDocRef= collectionRef.doc(); // it's telling firebase give me a new document reference in this collection and
    // because we're telling firestore that in this collection I want you to make me new document reference objects but create your own key.
    // and if we pass title value now if we save we will see that the I.D. inside of our document is our title.
    batch.set(newDocRef,obj)// Rather than doing the newDocRef.set() means rather than setting the value of each Document or calling 
    // docReference.set() everytime we can set it via batch it will set all the data when the whole data in a particular batch 
    // is made it to server 
    // what batch.set()// 2 argument - 1. Document Reference and 2. Obj- Object that we want to set in the particular document

    });

   // And at last we fire off our batch call via commit() and what it return is a promise and when commit succeed 
   // it will return a void value meaning a null value and it's good because we can use .then() and 
   // we have to make this as async function.
   return await batch.commit();


}
export const CollectionData=(snapShot)=>
{

  const docRef=snapShot.docs.map(doc=>
    {
      //console.log(doc.data());
      const {title,items}=doc.data();
      return{
        id:doc.id,
        routeName:encodeURI(title.toLowerCase()),
        title,
        items
      };
       
   
    });
    //docRef.map(doc=>{console.log(doc)})
    return docRef.reduce((accumulatedValue,doc)=>{
      accumulatedValue[doc.title.toLowerCase()]=doc;
      return accumulatedValue;
    },{});
    //console.log(docRef);
       
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;