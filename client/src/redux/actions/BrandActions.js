import { brandTypes } from "../types";

import axios from "axios";

const brandLoading = {
  type: brandTypes.BRAND_LOADING,
};

const brandLoadingDone = {
  type: brandTypes.BRAND_LOADING_DONE,
};

export const listBrands = () => async (dispatch) => {
  dispatch(brandLoading);
  try {
    const brands = await axios.get("/brand");

    dispatch({
      type: brandTypes.LIST_BRANDS,
      payload: brands.data,
    });

    return { success: brands.data };
  } catch (err) {
    return {
      error: (err.response && err.response.data) || "Some error occured",
    };
  } finally {
    dispatch(brandLoadingDone);
  }
};

export const addBrand = (brand) => async (dispatch) => {
  dispatch(brandLoading);
  try {
    const result = await axios.post("/brand", brand);

    if(result.data.error){
      throw new Error(result.data.error);
    }

    dispatch({
      type: brandTypes.CREATE_BRAND,
      payload: result.data,
    });

    return { success: result.data.name };
  } catch (err) {
    return {
      error: (err.response && err.response.data || err.message)  || "Some error occured",
    };
  } finally {
    dispatch(brandLoadingDone);
  }
};

export const updateBrand = (slug,brand) => async (dispatch) => {
  dispatch(brandLoading);
  try {
    const result = await axios.patch(`/brand/${slug}`, brand);

    dispatch({
      type: brandTypes.UPDATE_BRAND,
      payload: result.data,
    });

    return { success: result.data.name };
  } catch (err) {
    return {
      error: (err.response && err.response.data) || "Some error occured",
    };
  } finally {
    dispatch(brandLoadingDone);
  }
};

export const removeBrand = (slug) => async (dispatch) => {
  dispatch(brandLoading);
  try {
    const result = await axios.delete(`/brand/${slug}`);

    dispatch({
      type: brandTypes.DELETE_BRAND,
      payload: result.data._id,
    });

    return { success: result.data.name };
  } catch (err) {
    return {
      error: (err.response && err.response.data) || "Some error occured",
    };
  } finally {
    dispatch(brandLoadingDone);
  }
};
