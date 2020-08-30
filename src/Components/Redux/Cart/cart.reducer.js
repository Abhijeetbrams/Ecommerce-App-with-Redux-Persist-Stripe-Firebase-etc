import {addItemToCart} from './cart.util';
import {removeItemFromCart} from './cart.util';

const INITIAL_STATE={
hidden:true,
cart:[]
};

const Toggle=(state=INITIAL_STATE,action)=>{
switch (action.type) {
    case "SET_TOGGLE_CART":
        return{
            ...state,
            hidden:!state.hidden
        };
    case "ADD_ITEM":
      
        return {
            ...state,
            cart: addItemToCart(state.cart, action.payload)
          };
    case "REMOVE_ITEM":
        return {
            ...state,
            cart: state.cart.filter(cart1=>cart1.id!==action.payload.id)
          };
    case "REMOVE_ONE_ITEM":
        return {
            ...state,
            cart:removeItemFromCart(state.cart,action.payload.id)
        }
         
   default:
        return state;
}
};



export default Toggle;