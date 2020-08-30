import {createSelector} from 'reselect';

const selectUser = state=>state.user;

export const selectCurrentUser=createSelector(
    [selectUser], // it's the state.reducer
    user=>user.currentUser // and here user is return of the user that we have mentioned in the array.
);

