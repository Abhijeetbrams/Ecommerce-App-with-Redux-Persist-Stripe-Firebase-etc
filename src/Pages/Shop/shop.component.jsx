import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../Components/Collection Overview/collections-overview.component';
import CollectionPage from '../Collection/collection.component';
import {firestore} from '../../Components/FireBase/firebase.util';
import {CollectionData} from '../../Components/FireBase/firebase.util';
import {connect} from 'react-redux';
import {gettingCollection, loadingCheck} from '../../Components/Redux/Shop/shop.action';
import WithSpinner from '../../Components/WithSpinner/with-spinner.component';
//import {useState} from 'react';
import {createStructuredSelector} from 'reselect';
import {changeLoading} from '../../Components/Redux/Shop/shop.selector';


function ShopComponent(props) {
  //const[isLoading,setLoading]=useState(true);

  const CollectionOveriewWithSpinner= WithSpinner(CollectionsOverview);
  const CollectionPageWithSpinner=WithSpinner(CollectionPage);
 //console.log(match.path);
 useEffect(()=>{

const collectionRef=firestore.collection('collections');

collectionRef.onSnapshot(async snapShot=>{
  //console.log(snapShot);
  const collections= CollectionData(snapShot);
  //console.log(CollectionData(snapShot));
  props.gettingCollection(collections);
  props.loadingCheck(false);

})
  
},[]);


  return (
  <div className='shop-page'>
    <Route exact path={`${props.match.path}`} render={(props)=>(<CollectionOveriewWithSpinner isLoading={props.isLoading}{...props}/>)}/>
    <Route path="/shop/:collectionId" render={(props)=>(<CollectionPageWithSpinner  isLoading={props.isLoading}{...props}/>)}/>
  </div>);
}
//${match.path}/:collectionId
const mapStateToProps=createStructuredSelector(
  {
    isLoading:changeLoading
  }
)
const mapDispatchToProps=dispatch=>
({
  gettingCollection:collections=>dispatch(gettingCollection(collections)),
  loadingCheck:isLoading=>dispatch(loadingCheck(isLoading))
});
export default connect(null,mapDispatchToProps)(ShopComponent);