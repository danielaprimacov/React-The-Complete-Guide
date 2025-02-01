import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";

// manage merging multiple Reducers into one big Reducer
const store = configureStore({
  // a map of reducers
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;
