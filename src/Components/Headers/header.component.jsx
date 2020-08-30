import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../Assets/crown.svg';

import './header.style.scss';

import {auth} from '../FireBase/firebase.util';
import { connect } from 'react-redux'; 
import CartDropdown from '../Cart-DropDown/cart-dropdown.component';
import CartIcon from '../CartIcon/cart-icon.component';

import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../Redux/Users/user.selectors';
import {toggleCart} from '../Redux/Cart/cart.selectors';

function Header({ currentUser, hidden }){

    function handleClick()
    {
        auth.signOut();
        //console.log(currentUser.currentUser);
    }

    return(
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
     {currentUser? (
        <div className='option' onClick={handleClick}>
         SIGN OUT 
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon/>
    </div>
    {hidden ? null: <CartDropdown/>}
    
  </div>);
}


const mapStateToProps = createStructuredSelector({//this name can be anything but mapStateToProps mostly use in the react codebases.
//This function is going to be the function that allows us to access the states and this function is gonna return an
// object where the name of the property is the actual property we pass in.
// Here in this function we take "state" as an argument and this state is the "root reducer" means top level root reducer 
 
// createStructuredSelector will structure your selector and passes the top level state to the selectors function.
   currentUser:selectCurrentUser ,// rootReducer.userReducer.state
   hidden:toggleCart
  
});


export default connect(mapStateToProps)(Header);