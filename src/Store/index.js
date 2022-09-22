import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";
import ProductSlice from "./ProductSlice";

const RootReducer = combineReducers({
  counter: CounterSlice,
  products: ProductSlice,
});

const store = configureStore({
  reducer: RootReducer,
});

export default store;
