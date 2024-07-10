import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Filter{
    BRAND:{
        [key: string]:boolean
    }
    SIZES:{
        [key: string]:boolean
    }
}

const initialState:Filter={
    BRAND:{
        "Nike":false,
        "Adidas":false,
        "Puma":false,
        "Reebok":false,
    }, 
    SIZES:{
        "S":false,
        "M":false,
        "L":false,
        "XL":false,
    }
}

export const filterProductSlice = createSlice({
    name: "filterProduct",
    initialState,
    reducers: {
        handleFilterBrand:(state,action:PayloadAction<string>)=>{
            state.BRAND[action.payload] = !state.BRAND[action.payload];
        },
        handleFilterSizes:(state,action:PayloadAction<string>)=>{
            state.SIZES[action.payload] = !state.SIZES[action.payload];
        }
    },
})


export const { handleFilterBrand,handleFilterSizes } = filterProductSlice.actions;

export default filterProductSlice.reducer;