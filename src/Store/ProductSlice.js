import { createSlice } from "@reduxjs/toolkit";
import { Product_data } from "../data/ProductData";

const initialState = {
  productsData: Product_data,
  status: "idle",
  error: null,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const selectFeatureProducts = (state) =>
  state.products.productsData.filter((product) => product.is_featured);

export const selectHeadphones = (state) =>
  state.products.productsData.filter(
    (product) => product.category === "headphones"
  );

export const selectEarphones = (state) =>
  state.products.productsData.filter(
    (product) => product.category === "earphones"
  );

export const selectSpeakers = (state) =>
  state.products.productsData.filter(
    (product) => product.category === "speakers"
  );

export const selectProductById = (state, id) =>
  state.products.productsData.find((product) => product.id === id);

export default productSlice.reducer;
