export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER', // this helps to aware the reducer what specific type of action that's coming through is
    payload: user // we can use this in order to update our state and we can or can't use this.
  });