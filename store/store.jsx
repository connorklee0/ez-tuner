import { configureStore } from "@reduxjs/toolkit";
import tuningReducer from "./tuningSlice";

export const store = configureStore({
  reducer: {
    tuning: tuningReducer,
  },
});
