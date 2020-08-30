import React from 'react';

import CollectionItem from './CollectionItem.component';

import './collection-preview.styles.scss';

function CollectionPreview(props){
    return (
  <div className='collection-preview'>
      
    <h1 className='title'>{props.otherCollectionProps.title.toUpperCase()}</h1>
    <div className='preview'>
    
      {
      props.otherCollectionProps.items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
        
    </div>
  </div>
);
        }
export default CollectionPreview;