import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";

export const toolkitStore = configureStore({
  reducer: {
    toolkitCounter: counterReducer,
  },
});
