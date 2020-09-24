//import SHOP_DATA from '../../../Pages/Shop/shop.data';

const INITIAL_STATE=({
    shopData:[
        {
          title: 'Caps',
          imageUrl: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8209083/2019/5/3/dd004e50-f58d-445d-bf07-68938d5578841556883550985-HRX-by-Hrithik-Roshan-Men-Navy-Blue-Solid-Baseball-Cap-65515-2.jpg',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'Shoes',
          imageUrl: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11652512/2020/6/10/34654924-9371-4f56-92cc-041659cc05c01591783939456-Nike-Men-White-LEBRON-XVII-Mid-Top-Basketball-Shoes-59315917-1.jpg',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/3/f73294a0-211b-4342-8299-c44137cf45b61596467236525-Women-s-Ethnic_Desk--1-.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/3/48341bb4-bf06-4aee-93c3-21ff82bbbb371596467057034-Kurtas---Kurta-Sets_Desk.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ],
      shopItemData:null,
      isLoading:true,
      isFetching:false,
      errorMessage:null
});

const ShopReducer =(state=INITIAL_STATE,action)=>
{
    switch (action.type) {
      case "FETCH_COLLECTION_ASYNC_START":
       return{
         ...state,
         isFetching:true
       }
       case "FETCH_ASYNC_COLLECTION_SUCCESS":
         return{
           ...state,
           isFetching:false,
           shopItemData:action.payload
         }
       case "FETCH_ASYNC_COLLECTION_FAILURE":
         return{
           ...state,
           isFetching:false,
           errorMessage:action.payload
         }  
     /* case "FIREBASE_COLLECTION":
      return {
        ...state,
        shopItemData:action.payload
      }*/
      case "SERVER_LOADING":
        return{
          ...state,
          isLoading:false
        }
        default:
          return state;
      }
}

export default ShopReducer;