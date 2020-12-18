export const userActionTypes = {
  LOGGED_IN_USER: "LOGGED_IN_USER",
  LOGOUT: "LOGOUT",
  USER_LOADING: "USER_LOADING",
  USER_LOADING_DONE: "USER_LOADING_DONE",
};

export const categoryActionTypes = {
  CATEGORY_LOADING: "CATEGORY_LOADING",
  CATEGORY_LOADING_DONE: "CATEGORY_LOADING_DONE",
  CREATE_CATEGORY: "CREATE_CATEGORY",
  UPDATE_CATEGORY: "UPDATE_CATEGORY",
  LIST_ALL_CATEGORY: "LIST_ALL_CATEGORY",
  REMOVE_CATEGORY: "REMOVE_CATEGORY",
};

export const subCategoryActionTypes = {
  SUBCATEGORY_LOADING: "SUBCATEGORY_LOADING",
  SUBCATEGORY_LOADING_DONE: "SUBCATEGORY_LOADING_DONE",
  CREATE_SUBCATEGORY: "CREATE_SUBCATEGORY",
  UPDATE_SUBCATEGORY: "UPDATE_SUBCATEGORY",
  LIST_ALL_SUBCATEGORY: "LIST_ALL_SUBCATEGORY",
  REMOVE_SUBCATEGORY: "REMOVE_SUBCATEGORY",
};

export const tagActionTypes = {
  TAG_LOADING: "TAG_LOADING",
  TAG_LOADING_DONE: "TAG_LOADING_DONE",
  CREATE_TAG: "CREATE_TAG",
  DELETE_TAG: "DELETE_TAG",
  UPDATE_TAG: "UPDATE_TAG",
  LIST_TAGS: "LIST_TAGS",
};

export const brandTypes = {
  BRAND_LOADING: "BRAND_LOADING",
  BRAND_LOADING_DONE: "BRAND_LOADING_DONE",
  CREATE_BRAND: "CREATE_BRAND",
  DELETE_BRAND: "DELETE_BRAND",
  UPDATE_BRAND: "UPDATE_BRAND",
  LIST_BRANDS: "LIST_BRANDS",
};


export const cartTypes = {
  ADD_TO_CART : "ADD_TO_CART",
  DECREMENT_CART : "DECREMENT_CART",
  EMPTY_CART : "EMPTY_CART"
}