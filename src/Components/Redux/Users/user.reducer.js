const INITIAL_STATE = {
    currentUser: null
  };
  
  const userReducer = (state = INITIAL_STATE, action) => { // Reducer is just a function that takes state and action as parameter 
    // state - is something that the redux store is going to be something that the redux store is going  to pass
    // to this reducer whenever the action fires and the state will be whatever the state it is currently when that action
    // gets fired. 
    // setting state as "INITIAL_STATE" means that if state is ever undefined meaning that it's not set then it'll fall
    // set it to INITIAL_STATE value
    switch (action.type) {
      case 'SET_CURRENT_USER':
        return {
          ...state,
          currentUser: action.payload
        };
      default:
        return state;
    }
  };
  
  export default userReducer;