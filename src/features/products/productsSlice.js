import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const counterSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    initProducts: (state, action) => {
      state.products = [...action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { initProducts } = counterSlice.actions;

export default counterSlice.reducer;
