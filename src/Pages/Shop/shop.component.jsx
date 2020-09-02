import React,{useState} from 'react';
import CollectionPreview from '../../Components/Collection/CollectionPreview.component';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {showShoppingItem} from '../../Components/Redux/Shop/shop.selector';


 function ShopComponent({collections})
{

    return (
        <div className='shop-page'>
          {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} otherCollectionProps={otherCollectionProps} />
            
          ))}
      
        </div>
      );
}
const mapStateToProps=createStructuredSelector({
collections:showShoppingItem
});
export default connect(mapStateToProps)(ShopComponent);