import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import cartSlice from "./cartSlice";
import CounterSlice from "./CounterSlice";
import ProductSlice from "./ProductSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  version: 1,
  blacklist: ["counter", "products"],
};

const rootReducer = combineReducers({
  counter: CounterSlice,
  products: ProductSlice,
  cart: cartSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
