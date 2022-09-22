import { createSlice } from "@reduxjs/toolkit";
import { Product_data } from "../data/ProductData";

const initialState = {
  products: Product_data,
  status: "idle",
  error: null,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
