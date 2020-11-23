import { tagActionTypes } from "../types";
import axios from "axios";

const tagLoading = {
  type: tagActionTypes.TAG_LOADING,
};

const tagLoadingDone = {
  type: tagActionTypes.TAG_LOADING_DONE,
};

export const listAllTags = () => async (dispatch) => {
  dispatch(tagLoading);
  try {
    const tags = await axios.get("/tag");

    dispatch({
      type: tagActionTypes.LIST_TAGS,
      payload: tags.data,
    });
  } catch (err) {
    return { error: err.response.data || "Internal server error " };
  } finally {
    dispatch(tagLoadingDone);
  }
};

export const addNewTag = (name) => async (dispatch) => {
  dispatch(tagLoading);
  try {
    const newTag = await axios.post("/tag", { name });

    dispatch({
      type: tagActionTypes.CREATE_TAG,
      payload: newTag.data,
    });

    return { success: newTag.data.name };
  } catch (err) {
    return { error: err.response.data || "Error creating Tag" };
  } finally {
    dispatch(tagLoadingDone);
  }
};

export const deleteTag = (slug) => async (dispatch) => {
  dispatch(tagLoading);
  try {
    const deletedTag = await axios.delete(`/tag/${slug}`);

    dispatch({
      type: tagActionTypes.DELETE_TAG,
      payload: deletedTag.data,
    });

    return { success: deletedTag.data.name };
  } catch (err) {
    return { error: err.response.data || "Error deleting Tag" };
  } finally {
    dispatch(tagLoadingDone);
  }
};

export const updateTag = ({ name, slug }) => async (dispatch) => {
  dispatch(tagLoading);
  try {
    const updatedTag = await axios.patch(`/tag/${slug}`, { name });

    dispatch({
      type: tagActionTypes.UPDATE_TAG,
      payload: updatedTag.data,
    });

    return { success: updatedTag.data.name };
  } catch (err) {
    return { error: err.response.data || "Error updating Tag" };
  } finally {
    dispatch(tagLoadingDone);
  }
};
