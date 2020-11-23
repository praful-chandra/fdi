const INITIAL_STATE = {
    tags : [],
    tagLoading : false
}

import {tagActionTypes} from "../types";

import {addNewCategory,deleteCategory,updateCategory} from "../helpers/category.helpers";

export default (state = INITIAL_STATE , action) => {

    switch(action.type){

        case tagActionTypes.LIST_TAGS : return {
            ...state,
            tags : action.payload,
            tagLoading :false
        }

        case tagActionTypes.CREATE_TAG : return{
            ...state,
            tags : addNewCategory(state.tags , action.payload),
            tagLoading : false
        }
        case tagActionTypes.DELETE_TAG : return {
            ...state,
            tags : deleteCategory(state.tags,action.payload),
            tagLoading : false
        }
        case tagActionTypes.UPDATE_TAG : return{
            ...state,
            tags : updateCategory(state.tags , action.payload),
            tagLoading : false
        }
        case tagActionTypes.TAG_LOADING : return{
            ...state,
            tagLoading : true
        }
        case tagActionTypes.TAG_LOADING_DONE : return{
            ...state,
            tagLoading : false
        }

        default : return state;
    }

}