import { applyMiddleware, combineReducers, createStore } from "redux";
import accountReducer from "./Features/Account/AccountSlice";
import customerReducer from "./Features/Customer/CustomerSlice";
import thunk from "redux-thunk";
// import {composeWithDevTools} from 'redux-devtools-extension';
import {composeWithDevTools} from "redux-devtools-extension"

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
