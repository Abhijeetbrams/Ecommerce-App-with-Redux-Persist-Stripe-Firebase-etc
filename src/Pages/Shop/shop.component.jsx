import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../Components/Collection Overview/collections-overview.component';
import CollectionPage from '../Collection/collection.component';
import WithSpinner from '../../Components/WithSpinner/with-spinner.component';
//import {useState} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {changeLoading} from '../../Components/Redux/Shop/shop.selector';
import {fetchAsyncCollections} from '../../Components/Redux/Shop/shop.action';

function ShopComponent(props) {
  //const[isLoading,setLoading]=useState(true);

  const CollectionOveriewWithSpinner= WithSpinner(CollectionsOverview);
  const CollectionPageWithSpinner=WithSpinner(CollectionPage);
 //console.log(match.path);
 useEffect(()=>{

  props.fetchAsyncCollections();
  //props.loadingCheck(false);

  
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
  fetchAsyncCollections:()=>dispatch(fetchAsyncCollections()),
  //loadingCheck:isLoading=>dispatch(loadingCheck(isLoading))
});
export default connect(null,mapDispatchToProps)(ShopComponent);