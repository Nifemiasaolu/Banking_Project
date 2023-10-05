import accountReducer from "./Features/Account/AccountSlice";
import customerReducer from "./Features/Customer/CustomerSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  }
})

export default store;
