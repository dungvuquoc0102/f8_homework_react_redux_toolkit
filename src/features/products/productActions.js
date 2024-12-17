import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../../services/productService";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      return await getAllProducts();
    } catch (error) {
      console.log(error);
      // return rejectWithValue("error 01");
    }
  }
);
export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (product) => {
    console.log(product);
    return await addProduct(product);
  }
);
export const editProduct = createAsyncThunk(
  "products/editProduct",
  async ({ id, product }) => {
    console.log(product);
    return await updateProduct(id, product);
  }
);
export const removeProduct = createAsyncThunk(
  "products/removeProduct",
  async (id) => {
    await deleteProduct(id);
    return id;
  }
);
