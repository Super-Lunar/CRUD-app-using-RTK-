import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  name: "Apple",
  price: 100000,
  quantity: 28,
};

export const productSlice = createSlice({
  name: "productSlice",

  initialState: initialStateValue,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeQuantity: (state, action) => {
      state.quantity = action.payload;
    },
    changePrice: (state, action) => {
      state.price = action.payload;
    },
  },
});

export const { changeName, changePrice, changeQuantity } = productSlice.actions;

export default productSlice.reducer;

