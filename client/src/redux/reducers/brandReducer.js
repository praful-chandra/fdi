import { brandTypes } from "../types";

let INITIAL_STATE = {
  brands: [],
  brandLoading: false,
};

import {
  addNewCategory,
  deleteCategory,
  updateCategory,
} from "../helpers/category.helpers";

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case brandTypes.BRAND_LOADING:
      return {
        ...state,
        brandLoading: true,
      };

    case brandTypes.BRAND_LOADING_DONE:
      return {
        ...state,
        brandLoading: false,
      };

    case brandTypes.LIST_BRANDS:
      return {
        ...state,
        brands: action.payload,
        brandLoading: false,
      };

    case brandTypes.CREATE_BRAND:
      return {
        ...state,
        brands: addNewCategory(state.brands, action.payload),
        brandLoading: false,
      };

    case brandTypes.DELETE_BRAND:
      return {
        ...state,
        brands: deleteCategory(state.brands, action.payload),
        brandLoading: false,
      };

    case brandTypes.UPDATE_BRAND:
      return {
        ...state,
        brands: updateCategory(state.brands, action.payload),
        brandLoading: false,
      };
    default:
      return state;
  }
};
