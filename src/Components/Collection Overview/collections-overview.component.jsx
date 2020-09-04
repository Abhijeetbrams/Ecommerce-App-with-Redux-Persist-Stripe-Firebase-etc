import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../Collection/CollectionPreview.component';

import { selectCollectionsForPreview } from '../../Components/Redux/Shop/shop.selector';

import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => {
    console.log("Collection Oversiew");
    return (
  <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>)
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);