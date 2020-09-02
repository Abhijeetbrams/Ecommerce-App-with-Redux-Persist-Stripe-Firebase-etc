import {createSelector} from 'reselect';
const Shop_data=state=>state.shop;

export const showShopData=createSelector(
    [Shop_data],
    Data=>Data.shopData
)

export const showShoppingItem=createSelector(
    [Shop_data],
    Data=>Data.shopItemData
)