import {createStore,applyMiddleware,compose} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

const middlewares = [thunk];

let store ;

if(process.env.REACT_APP_STAGE === "PRODUCTION"){
store = createStore(rootReducer,compose(applyMiddleware(...middlewares)));
}else{
   store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middlewares)));
}



export {store};
