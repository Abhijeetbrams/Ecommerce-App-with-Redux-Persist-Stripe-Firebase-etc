import React from 'react';

import CollectionItem from './CollectionItem.component';

import './collection-preview.styles.scss';
import {withRouter} from 'react-router-dom';

function CollectionPreview({ title, items,history,match }){
  
  //onClick={history.push( history.push(`${match.url}${title.toLowerCase}`))}
  const title1="/"+title.toLowerCase();
  
    return (
  <div className='collection-preview'>
      
    <h1 className='title' onClick={()=> history.push(`${match.url}${title1}`)}>{title.toUpperCase()}</h1>
    <div className='preview'>
    
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
        
    </div>
  </div>
);
        }
export default withRouter(CollectionPreview);