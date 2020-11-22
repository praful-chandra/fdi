const INITIAL_STATE = {
    subCategories : [],
    subCategoryLoading : false,
}

import {subCategoryActionTypes} from "../types";

import {addNewCategory,deleteCategory,updateCategory} from "../helpers/category.helpers";

export default (state = INITIAL_STATE , action)=>{

    switch(action.type){
        case subCategoryActionTypes.SUBCATEGORY_LOADING  : return {
            ...state,
            subCategoryLoading : true
        }
        case subCategoryActionTypes.SUBCATEGORY_LOADING_DONE  : return {
            ...state,
            subCategoryLoading : false
        }
        case subCategoryActionTypes.CREATE_SUBCATEGORY :{
            return {
                ...state,
                subCategories : addNewCategory(state.subCategories , action.payload),
                subCategoryLoading : false
            }
        }
        case subCategoryActionTypes.REMOVE_SUBCATEGORY : return {
            ...state,
            subCategories : deleteCategory(state.subCategories , action.payload),
            subCategoryLoading : false
        }
        case subCategoryActionTypes.LIST_ALL_SUBCATEGORY : return {
            ...state,
            subCategories : action.payload,
            subCategoryLoading : false
        }
        case subCategoryActionTypes.UPDATE_SUBCATEGORY : return {
            ...state,
            subCategories : updateCategory(state.subCategories,action.payload),
            subCategoryLoading : false
        }
        default : return state
    }
}