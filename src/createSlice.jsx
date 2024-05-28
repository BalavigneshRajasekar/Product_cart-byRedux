/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

import data from "./products.json"; // Hold the product data
const individualPrice = data.products.map((item) => item.price);

const dataProvider = createSlice({
  name: "name",

  initialState: {
    //Initial state for the application
    items: data.products,
    stocks: data.products.map((item) => item.stock),
    totalPrice: individualPrice.reduce((x, y) => x + y),
  },

  reducers: {
    addItem: (state, action) => {
      console.log(action);
      state.items = action.payload;
    },
    price: (state, action) => {
      console.log(action);
      state.totalPrice = action.payload;
    },
    addStock: (state, action) => {
      state.stocks.push(action.payload);
    },
    removeStock: (state, action) => {
      state.stocks = state.stocks.filter(
        (stock) => stock.id !== action.payload.id
      );
    },
  },
});

export const { addItem, price, addStock, removeStock } = dataProvider.actions;

export default dataProvider.reducer;
