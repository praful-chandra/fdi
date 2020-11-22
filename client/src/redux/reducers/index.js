import {combineReducers} from 'redux';

import userReducer from "./userReducer";
import categoryReducer from "./categoryReducer";
import subCategoryReducer from "./subCategoryReducer";

export default  combineReducers({
    user : userReducer,
    category : categoryReducer,
    subCategory : subCategoryReducer
})   