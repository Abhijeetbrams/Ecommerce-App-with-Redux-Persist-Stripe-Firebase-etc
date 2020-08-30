import {createSelector} from 'reselect';


const selectCart =state => state.toggle; // 

export const selectCartItems = createSelector(
[selectCart],
toggle=>toggle.cart

);

export const selectCartItemCount=createSelector(
    [selectCartItems],
    cart=>cart.reduce((accummualtedValue,cart1)=>accummualtedValue+cart1.quantity,0)
);

export const toggleCart=createSelector(
    [selectCart],
    dropdown=>dropdown.hidden
);

export const selectCartAmount=createSelector(
    [selectCartItems],
    cart=>cart.reduce((accummualtedValue,cart1)=>accummualtedValue+cart1.quantity*cart1.price,0)
);