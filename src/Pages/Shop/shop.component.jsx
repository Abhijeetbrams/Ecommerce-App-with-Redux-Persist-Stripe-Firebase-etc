import React,{useState} from 'react';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../Components/Collection/CollectionPreview.component';

export default function ShopComponent()
{
    const [collections,setCollections]=useState(SHOP_DATA);

    return (
        <div className='shop-page'>
          {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} otherCollectionProps={otherCollectionProps} />
            
          ))}
      
        </div>
      );
}