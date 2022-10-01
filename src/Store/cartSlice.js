import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      const isItemInCart = state.find((item) => item.id === product.id);

      if (isItemInCart) {
        return state.map((item) =>
          item.id == product.id ? { ...item, ...product } : item
        );
      } else {
        return [...state, product];
      }
    },
    deleteFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    reset: () => initialState,
  },
});

export const { addToCart, deleteFromCart, reset } = cartSlice.actions;
export const selectCart = (state) => state.cart;
export const selectTotalAmount = (state) =>
  state.cart.reduce((acc, item) => acc + item.totalPrice, 0);

export default cartSlice.reducer;
