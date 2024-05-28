/* eslint-disable no-unused-vars */
import { configureStore } from "@reduxjs/toolkit";
import data from "./createSlice";

const store = configureStore({
  reducer: {
    store: data,
  },
});

export default store;
