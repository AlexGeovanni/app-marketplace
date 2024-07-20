import { createSlice } from "@reduxjs/toolkit";

interface Product{
    id: number
    name: string
    brand: string
    size: string
    category:string
    price:number
    off: number
}

const data: Product[] = [
    {
      id: 1,
      name: "Gorra1",
      brand: "Nike",
      size: "S",
      category: "hombre",
      price: 100,
      off: 10,
    },
    {
      id: 2,
      name: "Gorra2",
      brand: "Adidas",
      size: "S",
      category: "hombre",
      price: 120,
      off: 5,
    },
    {
      id: 3,
      name: "Gorra3",
      size: "M",
      brand: "Puma",
      category: "hombre",
      price: 150,
      off: 20,
    },
    {
      id: 4,
      name: "Gorra4",
      size: "L",
      brand: "Reebok",
      category: "hombre",
      price: 180,
      off: 30,
    },
    {
      id: 5,
      name: "Gorra5",
      size: "L",
      brand: "Puma",
      category: "hombre",
      price: 10,
      off: 30,
    },
    {
      id: 6,
      name: "Gorra6",
      size: "S",
      brand: "Nike",
      category: "hombre",
      price: 350,
      off:0,
    },
  ]

 const dataSlice = createSlice({
    name: 'dataSlice',
    initialState: {
        data
    },
    reducers: {
        PriceMayor: (state) => {
            state.data.sort((a, b) => b.price - a.price);
        },
        PriceMenor: (state) => {
            state.data.sort((a, b) => a.price - b.price);
        },
    },

})

export const { PriceMayor, PriceMenor } = dataSlice.actions;

export default dataSlice.reducer;