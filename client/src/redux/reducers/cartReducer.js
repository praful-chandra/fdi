import {cartTypes} from "../types";

const INITIAL_STATE = {
    items : [],
    totalPrice : 0
}


//Helpers
import {addToCart,addToLocalCart,deleteLocalCart} from "../helpers/cart.helpers";
import {getCartTotal} from "../../functions/cart.function";

export default (state = INITIAL_STATE ,action)=>{
    switch(action.type){

        case cartTypes.GET_CART :{
            return {
                ...state,
                items : action.payload,
                totalPrice : getCartTotal(action.payload)
            }
        }

        case cartTypes.GET_LOCAL_CART :{
            return {
                ...state,
                items : action.payload,
                totalPrice : getCartTotal(action.payload)
            }
        }

        case cartTypes.ADD_TO_CART:{
            return {
                ...state,
                items : addToCart(state.items,action.payload),
                totalPrice : getCartTotal(addToCart(state.items,action.payload))
            }
        }

        case cartTypes.ADD_TO_LOCAL_CART :{
            return {
                ...state,
                items : addToLocalCart(state.items,action.payload),
                totalPrice : getCartTotal(addToLocalCart(state.items,action.payload))
            }
        }

        case cartTypes.DELETE_LOCAL_CART :{
            return {
                ...state,
                items : deleteLocalCart(state.items , action.payload),
                totalPrice : getCartTotal(deleteLocalCart(state.items,action.payload))
            }
        }

        case cartTypes.EMPTY_CART :{
            window.localStorage.removeItem("cart");
            return{
                ...state,
                items : [],
                totalPrice : 0
            }
        }

        default : return state
    }
}  