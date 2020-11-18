import { userActionTypes } from "../types";

import firebase from "firebase";

export const userLoading = () => (dispatch) => {
  dispatch({
    type: userActionTypes.USER_LOADING,
  });
};
export const userLoadingDone = () => (dispatch) => {
  dispatch({
    type: userActionTypes.USER_LOADING_DONE,
  });
};

export const signInUser = (userobj) => (dispatch) => {
  dispatch({
    type: userActionTypes.LOGGED_IN_USER,
    payload: userobj,
  });
};

export const signoutUser = () => (dispatch) => {
  firebase.auth().signOut();
  dispatch({
    type: userActionTypes.LOGOUT,
  });
};
