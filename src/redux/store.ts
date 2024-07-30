import { configureStore, Store } from "@reduxjs/toolkit";
import  cartProductSlice from "./features/cartSlice";
import  filterProductSlice  from "./features/filterSlice";
import dataSlice from "./features/dataSlice";
import authuUserSlice from "./features/authuUserSlice";


export const store:Store = configureStore({
    reducer:{
        cart:cartProductSlice,
        filterProduct:filterProductSlice,
        dataSlice: dataSlice,
        authUser:authuUserSlice

    }
})


export type RootState= ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;