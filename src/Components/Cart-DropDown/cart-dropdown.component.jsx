import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../CartItem/cart-item.component';
import {selectCartItems} from '../Redux/Cart/cart.selectors';
import {withRouter} from 'react-router-dom';
import {setCartToggle} from '../Redux/Cart/cart.action';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cart,history,dispatch }) => ( // here what we are doing as we get dispatch props to our component
// from the connect thus we don't have to write the mapDispatchToProps in our code and don't have to pass 2nd arg of connect
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cart.length?cart.map(cart1 => (
        <CartItem key={cart1.id} item={cart1} />
      )): <span className='empty-message'>Your cart is empty</span>}
    </div>
    <CustomButton onClick={()=>
        {history.push('/checkout')
        dispatch(setCartToggle()) // so here we are calling dispatch in order to toggle the CartDropDown
        }}>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state) => {
    console.log("MSTP CartDropdown");
    return {
  cart: selectCartItems(state)}
};


export default withRouter(connect(mapStateToProps)(CartDropdown));//withRouter is  an HOC which take the returned component
// of the another HOC of connect 
// Note :- Order of HOC should be correct as withRouter is a HOC that provide location,match,history props to the component
// that is wrapped by connect 