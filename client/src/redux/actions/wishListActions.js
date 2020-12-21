import axios from "axios";
import { wishListTypes } from "../types";

export const toggleWishlist = (productId) => async (dispatch) => {
  try {
    const status = await axios.post(`/user/wishlist/${productId}`);
    if (status.success) {
      return { success: true };
    } else {
      return { error: true };
    }
  } catch (err) {
    return { error: "Internal server error" };
  } finally {
    const list = await axios.get("/user/wishlist/list");
    if (list.data) {
      dispatch({
        type: wishListTypes.LIST_WISHLIST,
        payload: list.data,
      });
    }
  }
};



export const listWishList = () => async (dispatch) => {
  try {
    const list = await axios.get("/user/wishlist/list");
    if (list.data) {
      dispatch({
        type: wishListTypes.LIST_WISHLIST,
        payload: list.data,
      });
    }
  } catch (err) {
    return { error: "Internal server error" };
  }
};
