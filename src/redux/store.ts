import { configureStore } from "@reduxjs/toolkit";
import  cartProductSlice from "./features/cartSlice";


export const store = configureStore({
    reducer:{
        cart:cartProductSlice
    }
})


export type RootState= ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;