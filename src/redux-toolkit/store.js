import { configureStore } from "@reduxjs/toolkit";
import isNavActiveReducer from "./reducers/nav.reducer";

export const store = configureStore({
  reducer: {
    nav: isNavActiveReducer,
  },
});
