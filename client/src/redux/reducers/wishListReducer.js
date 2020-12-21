import {wishListTypes} from "../types";

const INITIAL_STATE = [];

export default (state = INITIAL_STATE ,action) =>{
        switch(action.type){

            case wishListTypes.LIST_WISHLIST : {
                return action.payload
            }


            default : return state;
        }
}