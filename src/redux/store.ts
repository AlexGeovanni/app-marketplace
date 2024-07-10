import { configureStore, Store } from "@reduxjs/toolkit";
import  cartProductSlice from "./features/cartSlice";
import  filterProductSlice  from "./features/filterSlice";


export const store:Store = configureStore({
    reducer:{
        cart:cartProductSlice,
        filterProduct:filterProductSlice
    }
})


export type RootState= ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;