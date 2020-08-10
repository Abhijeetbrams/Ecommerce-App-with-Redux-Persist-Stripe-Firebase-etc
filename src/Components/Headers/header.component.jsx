import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../Assets/crown.svg';

import './header.style.scss';

import {auth} from '../FireBase/firebase.util';

const Header = (props) => (
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
     {props.user ? (
        <div className='option' onClick={() => auth.signOut()}>
         SIGN OUT 
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export default Header;