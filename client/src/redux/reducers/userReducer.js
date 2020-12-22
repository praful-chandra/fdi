import {userActionTypes} from "../types";

const INITIAL_STATE = {
    user : null,
    token : null,
    userLoading : false
}

export default (state = INITIAL_STATE , action) =>{


    switch(action.type){

        case userActionTypes.USER_LOADING : return {
            ...state,
            userLoading : true
        }

        case userActionTypes.USER_LOADING_DONE : return {
            ...state,
            userLoading : false
        }

        case userActionTypes.LOGGED_IN_USER : return {
            ...state,
            user : action.payload.user,
            token : action.payload.token,
            userLoading : false
        };
        case userActionTypes.LOGOUT : return {
            ...state,
            user : null,
            token : null,
            userLoading : false
        };

        case userActionTypes.UPDATE_ADDRESS : return{
            ...state,
            user : {...state.user , address : action.payload}
        }

        default : return state

    }

} 