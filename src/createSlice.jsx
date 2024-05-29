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

  //Here we handle our state updations
  reducers: {
    addItem: (state, action) => {
      //This Logic will help us to create an subtotal in the items state
      let updatedPrice = state.items.map((value1) => {
        if (value1.id == action.payload.id) {
          console.log(action.payload.value * action.payload.eachPrice);
          return {
            ...value1,
            ["subTotal"]: action.payload.value * action.payload.eachPrice,
          };
        }

        return value1;
      });

      state.items = updatedPrice;

      //This Logic will help us to add the Total value of already existing cart and new increased quantity
      let total = updatedPrice.map((value, i) => {
        if (i == action.payload.index) {
          return value.subTotal;
        }
        return value.subTotal ? value.subTotal : value.price;
      });

      state.totalPrice = total.reduce((x, y) => x + y); //TotalPrice
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((f) => f.id !== action.payload.id);

      // This logic is help us to handle the TotalPrice after cart is removed
      let deletedValue = state.items.map((value) => {
        if (value.id == action.payload.id) {
          return 0;
        }

        return value.subTotal
          ? value == 0
            ? 0
            : value.subTotal
          : value == 0
          ? 0
          : value.price;
      });

      state.totalPrice =
        deletedValue.length > 0 ? deletedValue.reduce((x, y) => x + y) : 0;
    },
  },
});

export const { addItem, removeItem } = dataProvider.actions;

export default dataProvider.reducer;
