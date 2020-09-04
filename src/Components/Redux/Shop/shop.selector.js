import {createSelector} from 'reselect';
const Shop_data=state=>state.shop;

const CategoryData={
    Hats:1,
    Sneakers:2,
    Jackets:3,
    Womens:4,
    Mens:5    

}

export const showShopData=createSelector(
    [Shop_data],
    Data=>Data.shopData
)

export const showShoppingItem=createSelector(
    [Shop_data],
    Data=>Data.shopItemData
)

export const selectCollectionsForPreview = createSelector(
    [showShoppingItem],
    collections => Object.keys(collections).map(key => collections[key])
  );
  
  export const selectCollection = collectionUrlParam =>
    createSelector(
      [showShoppingItem],
      collections => collections[collectionUrlParam]
    );