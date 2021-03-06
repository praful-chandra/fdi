import { cartTypes } from "../types";
import axios from "axios";

export const addCart = (
  productId,
  addOns,
  count,
  exchangeProduct,
  user
) => async (dispatch) => {
  try {
    exchangeProduct = exchangeProduct ? exchangeProduct : {};

    if (user.user && user.token) {
      const res = await axios.post("/user/addCart", {
        productId,
        addOns,
        quantity: count,
        exchange: exchangeProduct,
      });

      if (res && res.data.success) {
        dispatch({
          type: cartTypes.ADD_TO_CART,
          payload: res.data.success,
        });
      }
    } else {
      const product = await axios.get(`/product/color/${productId}`);
      if (product.data) {
        dispatch({
          type: cartTypes.ADD_TO_LOCAL_CART,
          payload: { product: product.data, count, addOns, exchangeProduct },
        });
      }
    }

    return { success: true };
  } catch (err) {
    return {
      error: (err.response && err.response.data) || "Some error occured",
    };
  }
};



export const deleteCart = (productId, user) => async (dispatch) => {

  if(window.localStorage.getItem("cart")){
    dispatch({
      type: cartTypes.DELETE_LOCAL_CART,
      payload: productId,
    });
  }  

  if (user.user && user.token) {
    try {
      const cart = await axios.delete(`/user/cart/${productId}`);
      if (cart.data.success) {
        return { success: true };
      }
    } catch (err) {
      return {
        error: (err.response && err.response.data) || "Some error occured",
      };
    } finally {
      if(!window.localStorage.getItem("cart") || window.localStorage.getItem("cart") === "[]"){
        const res = await axios.get("/user/getCart");
      if (res && res.data) {
        dispatch({
          type: cartTypes.GET_CART,
          payload: res.data,
        });
      }
      }
    }
  } else {
    dispatch({
      type: cartTypes.DELETE_LOCAL_CART,
      payload: productId,
    });
  }
};

export const getCart = () => async (dispatch) => {
  try {
    const res = await axios.get("/user/getCart");

    if (res && res.data) {
      dispatch({
        type: cartTypes.GET_CART,
        payload: res.data,
      });
    }
  } catch (err) {
    return {
      error: (err.response && err.response.data) || "Some error occured",
    };
  }
};

export const getLocalCart = () => (dispatch) => {
  const cartL = window.localStorage.getItem("cart");

  if (cartL) {
    dispatch({
      type: cartTypes.GET_LOCAL_CART,
      payload: JSON.parse(cartL),
    });
  }
};
