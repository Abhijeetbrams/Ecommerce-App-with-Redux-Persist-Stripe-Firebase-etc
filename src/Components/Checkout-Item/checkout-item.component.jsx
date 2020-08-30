import React from 'react';
import {connect} from 'react-redux';

import './checkout-item.styles.scss';
import {RemoveItem, RemoveOneItem,AddItem} from '../Redux/Cart/cart.action';

const CheckoutItem = ({ cartItem,RemoveItem,AddItem,RemoveOneItem  }) => {

    const { name, imageUrl, price, quantity }=cartItem
    return (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item' />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>
        <div className='arrow' onClick={() => RemoveOneItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => AddItem(cartItem)}>
          &#10095;
        </div>
      </span>
    <span className='price'>{price}</span>
    <div className='remove-button'onClick={()=>RemoveItem(cartItem)}>&#10005;</div>
  </div>)
};

const mapDispatchToProps=dispatch =>
({
    RemoveItem:(item) => dispatch(RemoveItem(item)),
    AddItem:(item)=>dispatch(AddItem(item)),
    RemoveOneItem:(item)=>dispatch(RemoveOneItem(item))
});

export default connect(null,mapDispatchToProps)(CheckoutItem);