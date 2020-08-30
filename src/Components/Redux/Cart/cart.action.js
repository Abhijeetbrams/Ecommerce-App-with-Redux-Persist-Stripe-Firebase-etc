
export const setCartToggle=()=>({

    type:"SET_TOGGLE_CART"
    
});

export const AddItem=(item)=>({
    type:"ADD_ITEM",
    payload:item
});

export const RemoveItem=(item)=>({
    type:"REMOVE_ITEM",
    payload:item
});

export const RemoveOneItem=(item)=>({
    type:"REMOVE_ONE_ITEM",
    payload:item
})