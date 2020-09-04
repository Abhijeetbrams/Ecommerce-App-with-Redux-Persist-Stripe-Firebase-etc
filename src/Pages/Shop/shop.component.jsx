import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../Components/Collection Overview/collections-overview.component';
import CollectionPage from '../Collection/collection.component';

const ShopComponent = ({ match }) => {
 console.log(match.path);
  return (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path="/shop/:collectionId" component={CollectionPage} />
  </div>);
};
//${match.path}/:collectionId
export default ShopComponent;