/* eslint-disable no-unused-vars */
import { configureStore } from "@reduxjs/toolkit";
import data from "./createSlice";

const store = configureStore({
  reducer: {
    counter: data,
  },
});

export default store;
