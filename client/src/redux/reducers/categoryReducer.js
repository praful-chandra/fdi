import {categoryActionTypes} from "../types";

const INITIAL_STATE = { 
    categories : [],
    categoryLoading : false
}

import {addNewCategory,deleteCategory} from "../helpers/category.helpers";

export default (state = INITIAL_STATE , action)=>{
    switch(action.type){
        case categoryActionTypes.CATEGORY_LOADING  : return {
            ...state,
            categoryLoading : true
        }
        case categoryActionTypes.CATEGORY_LOADING_DONE  : return {
            ...state,
            categoryLoading : false
        }
        case categoryActionTypes.CREATE_CATEGORY : return {
            ...state,
            categories : addNewCategory(state.categories , action.payload),
            categoryLoading : false
        }
        case categoryActionTypes.REMOVE_CATEGORY : return {
            ...state,
            categories : deleteCategory(state.categories , action.payload),
            categoryLoading : false
        }
        case categoryActionTypes.LIST_ALL_CATEGORY : return {
            ...state,
            categories : action.payload,
            categoryLoading : false
        }
        default : return state
    }
}