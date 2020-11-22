import { subCategoryActionTypes } from "../types";
import axios from "axios";

const subCategoryLoading = {
  type: subCategoryActionTypes.SUBCATEGORY_LOADING,
};

const subCategoryLoadingDone = {
  type: subCategoryActionTypes.SUBCATEGORY_LOADING_DONE,
};

export const addNewSubCategory = (subCategory) => async (dispatch) => {
  dispatch(subCategoryLoading);
  try {
    const result = await axios.post("/subcategory", {
      name: subCategory.name,
      parent: subCategory.parent,
    });

    dispatch({
      type: subCategoryActionTypes.CREATE_SUBCATEGORY,
      payload: result.data,
    });

    return { success: result.data.name };

  } catch (err) {
    return { error: err.response.data.error };
  } finally {
    dispatch(subCategoryLoadingDone);
  }
};

export const listAllSubCategories = () => async (dispatch) => {
  dispatch(subCategoryLoading);

  try {
    const result = await axios.get(`/subcategory`);

    dispatch({
      type: subCategoryActionTypes.LIST_ALL_SUBCATEGORY,
      payload: result.data,
    });

    return { success: true };
  } catch (err) {
    return { error: err.response.data.error };
  } finally {
    dispatch(subCategoryLoadingDone);
  }
};

export const deleteSubCategory = (slug) => async (dispatch) => {
  dispatch(subCategoryLoading);
  try {
    const result = await axios.delete(`/subcategory/${slug}`);

    dispatch({
      type: subCategoryActionTypes.REMOVE_SUBCATEGORY,
      payload: result.data._id,
    });

    if (result.data) {
      return { success: result.data.name };
    }
  } catch (err) {
    return { error: err.response.data || "Delete Failed" };
  } finally {
    dispatch(subCategoryLoadingDone);
  }
};

export const updateSubCateory = (newSubCategory) => async (dispatch) => {
  dispatch(subCategoryLoading);
  try {
    const result = await axios.patch(`/subcategory/${newSubCategory.slug}`, {
      name: newSubCategory.name,
    });

    dispatch({
      type: subCategoryActionTypes.UPDATE_SUBCATEGORY,
      payload: result.data,
    });
    return { success: result.data.name };
  } catch (err) {
    return { error: err.response.data.error || "Update Failed" };
  } finally {
    dispatch(subCategoryLoadingDone);
  }
};
