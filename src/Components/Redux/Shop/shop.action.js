import {firestore,CollectionData} from '../../FireBase/firebase.util';


/*export const gettingCollection=collection=>({
    type:"FIREBASE_COLLECTION",
    payload:collection
}); 
*/
export const loadingCheck=isLoading=>({
    type:"SERVER_LOADING",
    payload:isLoading
} );

export const fetchAsyncStart=()=>(
    {
        type:"FETCH_COLLECTION_ASYNC_START"
    }
);

export const fetchAsyncSuccess=(collections)=>(
    {
        type:"FETCH_ASYNC_COLLECTION_SUCCESS",
        payload:collections
    }
);

export const fetchAsyncFailure=(error)=>
(
    {
        type:"FETCH_ASYNC_COLLECTION_FAILURE",
        payload:error
    }
);

export const fetchAsyncCollections=()=>
{
    return (dispatch)=>{
        const collectionRef=firestore.collection('collections');
   dispatch(fetchAsyncStart());
 collectionRef.get().then( snapShot=>{
  //console.log(snapShot);
  const collections= CollectionData(snapShot);
  dispatch(fetchAsyncSuccess(collections));
  //console.log(CollectionData(snapShot));
  //props.gettingCollection(collections);
  //props.loadingCheck(false);
    }).catch(error=>dispatch(fetchAsyncFailure(error.message)));
  };
} ;