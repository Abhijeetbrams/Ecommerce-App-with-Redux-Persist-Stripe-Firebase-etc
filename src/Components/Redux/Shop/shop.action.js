
export const gettingCollection=collection=>({
    type:"FIREBASE_COLLECTION",
    payload:collection
}); 

export const loadingCheck=isLoading=>({
    type:"SERVER_LOADING",
    payload:isLoading
} )