import React from 'react';
import { connect } from 'react-redux';

import { setCartToggle } from '../Redux/Cart/cart.action';
import {selectCartItemCount} from '../Redux/Cart/cart.selectors'
import { ReactComponent as ShoppingIcon } from '../Assets/shopping-bag.svg';


import './cart-icon.styles.scss';

const CartIcon = ({ setCartToggle,itemCount }) => (
  <div className='cart-icon' onClick={setCartToggle}>
    <ShoppingIcon className='shopping-icon' />
<span className='item-count'>{itemCount}</span>
{console.log(itemCount)}
  </div>
);

const mapDispatchToProps = dispatch => ({
    setCartToggle: () => dispatch(setCartToggle())
});

const mapStateToProps=state=>{
//state.toggle.cart.map(cartItem=>console.log(cartItem.quantity));
console.log("MSTP CartIcon");
   return {
       itemCount:selectCartItemCount(state)
   };
  
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon); 