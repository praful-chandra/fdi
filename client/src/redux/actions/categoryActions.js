import { categoryActionTypes } from "../types";
import axios from "axios";

const categoryLoading = {
  type: categoryActionTypes.CATEGORY_LOADING,
};
const categoryLoadingDone = {
  type: categoryActionTypes.CATEGORY_LOADING_DONE,
};

export const addNewCategory = (name) => async (dispatch) => {
  dispatch(categoryLoading);
  try {
    const category = await axios.post("/category", { name });
    dispatch({
      type: categoryActionTypes.CREATE_CATEGORY,
      payload: category.data,
    });
    return { success: category.data.name };
  } catch (err) {
    return { error: err.response.data.error };
  } finally {
    dispatch(categoryLoadingDone);
  }
};

export const listAllCategories = () => async (dispatch) => {
  dispatch(categoryLoading);
  try {
    const result = await axios.get("/category");
    dispatch({
      type: categoryActionTypes.LIST_ALL_CATEGORY,
      payload: result.data,
    });
  } catch (err) {
    return { error: "Internal server error has occured! " };
  } finally {
    dispatch(categoryLoadingDone);
  }
};

export const deleteCategory = (slug) => async (dispatch) => {
  dispatch(categoryLoading);
  try {
    const result = await axios.delete(`/category/${slug}`);

    dispatch({
      type: categoryActionTypes.REMOVE_CATEGORY,
      payload: result.data._id,
    });

    if (result.data) {
      return { success: result.data };
    }
  } catch (err) {
    return { error: err.response.data || "Delete Failed" };
  } finally {
    dispatch(categoryLoadingDone);
  }
};

export const updateCateory = (newCategory) => async (dispatch) => {
  dispatch(categoryLoading);
  try {
    const result = await axios.patch(`/category/${newCategory.slug}`, {
      name: newCategory.name,
    });

    dispatch({
      type: categoryActionTypes.UPDATE_CATEGORY,
      payload: result.data,
    });
    return { success: result.data.name };
  } catch (err) {
    return { error: err.response.data.error || "Update Failed" };
  } finally {
    dispatch(categoryLoadingDone);
  }
};
