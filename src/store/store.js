import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "../features/products/productSlide";

export const store = configureStore({
  reducer: {
    products: productReducer
  }
});

export default store;
