/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const dataProvider = createSlice({
  name: "name",
  initialState: {
    items: [],
    stocks: [],
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.totalPrice -= action.payload.price;
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

export const { addItem, removeItem, addStock, removeStock } =
  dataProvider.actions;

export default dataProvider.reducer;
