import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/ProductSlice";
import { productApi } from "../Services/api/productService";

export const store = configureStore({
  reducer: {
    // info: infoSlice,
    // address: addressSlice,
    product: productSlice,

    [productApi.reducerPath]:productApi.reducer,
   
  },
  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat([productApi.middleware,]),
});
