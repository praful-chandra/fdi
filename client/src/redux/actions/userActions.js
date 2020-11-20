import { userActionTypes } from "../types";
import firebase from "firebase";
import axios  from 'axios';

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

export const signInUser = (userobj) => async (dispatch) => {

 
  dispatch({
    type: userActionTypes.LOGGED_IN_USER,
    payload: userobj,
  });
};

export const signoutUser = () => (dispatch) => {
  firebase.auth().signOut();
  axios.defaults.headers.common['authtoken'] = null;
  dispatch({
    type: userActionTypes.LOGOUT,
  });
};
