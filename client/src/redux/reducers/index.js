import {combineReducers} from 'redux';

import userReducer from "./userReducer";
import categoryReducer from "./categoryReducer";
import subCategoryReducer from "./subCategoryReducer";
import tagReducer from "./tagReducer";
import brandReducer from "./brandReducer";

export default  combineReducers({
    user : userReducer,
    category : categoryReducer,
    subCategory : subCategoryReducer,
    tag : tagReducer,
    brand : brandReducer
})   