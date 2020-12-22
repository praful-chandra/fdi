import {cartTypes} from "../types";
import axios from "axios";


export const addCart = (productId,addOns,count,exchangeProduct,user)=> async dispatch =>{
    console.log(exchangeProduct);

    try{
        exchangeProduct = exchangeProduct ? {
            name : exchangeProduct.name,
            exchangePrice : exchangeProduct.exchangePrice,
            exchangeItem : exchangeProduct._id
        } : {}

        // if(user.user && user.token){
            const res = await axios.post("/user/addCart",{productId,addOns,quantity :count,exchange : exchangeProduct});

        if(res && res.data.success){
            dispatch({
                type : cartTypes.ADD_TO_CART,
                payload : res.data.success
            })
        }
        // }else{
        //     const product = await axios.get(`/product/color/${productId}`);
        //     if(product.data){
        //         dispatch({
        //             type : cartTypes.ADD_TO_LOCAL_CART,
        //             payload : product.data
        //         })
        //     }
        // }

        return {success : true}

    }catch(err){
        return {
            error: (err.response && err.response.data) || "Some error occured",
          };
    }

}

export const deleteCart = productId => async dispatch =>{
    try{

        const cart = await axios.delete(`/user/cart/${productId}`);
        if(cart.data.success){
            return {success : true}
        }

    }catch(err){
        return {
            error: (err.response && err.response.data) || "Some error occured",
          };
    }finally{
        const res = await axios.get("/user/getCart");
        if(res && res.data){
            dispatch({
                type : cartTypes.GET_CART,
                payload : res.data
            })
        }
    }
}

export const getCart = () =>async dispatch =>{
    try{

        const res = await axios.get("/user/getCart");

        if(res && res.data){
            dispatch({
                type : cartTypes.GET_CART,
                payload : res.data
            })
        }

    }catch(err){
        return {
            error: (err.response && err.response.data) || "Some error occured",
          };
    }
}

export const getLocalCart = () => dispatch =>{

    const cartL = window.localStorage.getItem('cart');

    if(cartL){
        dispatch({
            type : cartTypes.GET_LOCAL_CART,
            payload : JSON.parse(cartL)
        })
    }
}