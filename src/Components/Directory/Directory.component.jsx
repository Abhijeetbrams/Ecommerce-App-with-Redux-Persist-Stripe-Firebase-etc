import React, { useEffect } from 'react';
import MenuItem from '../MenuItem/MenuItem';
import {useState} from 'react'
import './Directory.style.scss';
import {createStructuredSelector} from 'reselect';
import {showShopData} from '../Redux/Shop/shop.selector';
import {connect} from 'react-redux';

 function Directory({sections})
{
  
  
  return (
    <div className='directory-menu'>
    {sections.map(({ title, imageUrl, id, size }) => (
      <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
    ))}
    {console.log(sections)}
  </div>  
  );

}
const mapStateToProps=createStructuredSelector({
  sections:showShopData
})
export default connect(mapStateToProps)(Directory);