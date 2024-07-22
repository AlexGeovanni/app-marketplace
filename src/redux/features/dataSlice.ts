import { createSlice } from "@reduxjs/toolkit";

export interface Product{
    id: number
    off: number
    url:string,
    name: string
    brand: string
    color: string
    size: string
    price:number
    gender: string
}

const data: Product[] = [
  {
    id: 1,
    off: 31,
    name: "Playera",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "M",
    brand: "Gucci",
    color: "Celeste",
    price: 189,
    gender: "Mujer"
  },
  {
    id: 2,
    off: 43,
    name: "Playera",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "X",
    brand: "Gucci",
    color: "Azul",
    price: 504,
    gender: "Mujer"
  },
  {
    id: 3,
    off: 42,
    name: "Camisa",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "X",
    brand: "Gucci",
    color: "Amarillo",
    price: 226,
    gender: "Mujer"
  },
  {
    id: 4,
    off: 63,
    name: "Playera",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "XL",
    brand: "NOVA",
    color: "Azul",
    price: 142,
    gender: "Mujer"
  },
  {
    id: 5,
    off: 46,
    name: "Camisa",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "M",
    brand: "Gucci",
    color: "Red",
    price: 548,
    gender: "Kids"
  },
  {
    id: 6,
    off: 41,
    name: "Camisa",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "X",
    brand: "NOVA",
    color: "Celeste",
    price: 235,
    gender: "Mujer"
  },
  {
    id: 7,
    off: 61,
    name: "Playera",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "X",
    brand: "NOVA",
    color: "Amarillo",
    price: 299,
    gender: "Mujer"
  },
  {
    id: 8,
    off: 15,
    name: "Playera",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "S",
    brand: "LEVI`S",
    color: "Blanco",
    price: 309,
    gender: "Mujer"
  },
  {
    id: 9,
    off: 19,
    name: "Camisa",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "M",
    brand: "LEVI`S",
    color: "Celeste",
    price: 280,
    gender: "Hombre"
  },
  {
    id: 10,
    off: 48,
    name: "Camisa",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "S",
    brand: "NOVA",
    color: "Azul",
    price: 341,
    gender: "Mujer"
  },
  {
    id: 11,
    off: 67,
    name: "Playera",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "S",
    brand: "LEVI`S",
    color: "Red",
    price: 564,
    gender: "Mujer"
  },
  {
    id: 12,
    off: 30,
    name: "Camisa",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "M",
    brand: "Gucci",
    color: "Blanco",
    price: 220,
    gender: "Kids"
  },
  {
    id: 13,
    off: 14,
    name: "Playera",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "X",
    brand: "H&M",
    color: "Verde",
    price: 165,
    gender: "Kids"
  },
  {
    id: 14,
    off: 56,
    name: "Camisa",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "X",
    brand: "NOVA",
    color: "Red",
    price: 461,
    gender: "Kids"
  },
  {
    id: 15,
    off: 42,
    name: "Playera",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "S",
    brand: "H&M",
    color: "Verde",
    price: 427,
    gender: "Kids"
  },
  {
    id: 16,
    off: 29,
    name: "Camisa",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "S",
    brand: "NOVA",
    color: "Verde",
    price: 475,
    gender: "Mujer"
  },
  {
    id: 17,
    off: 93,
    name: "Playera",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "XL",
    brand: "Gucci",
    color: "Celeste",
    price: 393,
    gender: "Hombre"
  },
  {
    id: 18,
    off: 88,
    name: "Camisa",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "XL",
    brand: "NOVA",
    color: "Amarillo",
    price: 305,
    gender: "Mujer"
  },
  {
    id: 19,
    off: 47,
    name: "Camisa",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "M",
    brand: "LEVI`S",
    color: "Red",
    price: 471,
    gender: "Hombre"
  },
  {
    id: 20,
    off: 4,
    name: "Camisa",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "S",
    brand: "Gucci",
    color: "Verde",
    price: 329,
    gender: "Hombre"
  },
  {
    id: 21,
    off: 4,
    name: "Playera",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "M",
    brand: "NOVA",
    color: "Red",
    price: 423,
    gender: "Mujer"
  },
  {
    id: 22,
    off: 71,
    name: "Playera",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "X",
    brand: "H&M",
    color: "Azul",
    price: 197,
    gender: "Hombre"
  },
  {
    id: 23,
    off: 98,
    name: "Playera",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "X",
    brand: "NOVA",
    color: "Red",
    price: 145,
    gender: "Kids"
  },
  {
    id: 24,
    off: 5,
    name: "Playera",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "M",
    brand: "H&M",
    color: "Red",
    price: 165,
    gender: "Kids"
  },
  {
    id: 25,
    off: 1,
    name: "Playera",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "M",
    brand: "H&M",
    color: "Amarillo",
    price: 553,
    gender: "Hombre"
  },
  {
    id: 26,
    off: 22,
    name: "Camisa",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "M",
    brand: "LEVI`S",
    color: "Blanco",
    price: 366,
    gender: "Mujer"
  },
  {
    id: 27,
    off: 42,
    name: "Camisa",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "XL",
    brand: "Gucci",
    color: "Blanco",
    price: 330,
    gender: "Mujer"
  },
  {
    id: 28,
    off: 97,
    name: "Camisa",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "X",
    brand: "H&M",
    color: "Azul",
    price: 245,
    gender: "Kids"
  },
  {
    id: 29,
    off: 63,
    name: "Camisa",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "M",
    brand: "H&M",
    color: "Verde",
    price: 177,
    gender: "Hombre"
  },
  {
    id: 30,
    off: 83,
    name: "Playera",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "X",
    brand: "H&M",
    color: "Celeste",
    price: 171,
    gender: "Hombre"
  },
  {
    id: 31,
    off: 87,
    name: "Camisa",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "X",
    brand: "H&M",
    color: "Amarillo",
    price: 254,
    gender: "Hombre"
  },
  {
    id: 32,
    off: 31,
    name: "Playera",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "M",
    brand: "Gucci",
    color: "Azul",
    price: 325,
    gender: "Mujer"
  },
  {
    id: 33,
    off: 46,
    name: "Camisa",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "M",
    brand: "H&M",
    color: "Celeste",
    price: 240,
    gender: "Mujer"
  },
  {
    id: 34,
    off: 65,
    name: "Playera",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "M",
    brand: "H&M",
    color: "Azul",
    price: 406,
    gender: "Hombre"
  },
  {
    id: 35,
    off: 0,
    name: "Playera",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "X",
    brand: "NOVA",
    color: "Blanco",
    price: 500,
    gender: "Mujer"
  },
  {
    id: 36,
    off: 97,
    name: "Camisa",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "M",
    brand: "NOVA",
    color: "Red",
    price: 587,
    gender: "Mujer"
  },
  {
    id: 37,
    off: 27,
    name: "Camisa",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "S",
    brand: "LEVI`S",
    color: "Blanco",
    price: 306,
    gender: "Kids"
  },
  {
    id: 38,
    off: 7,
    name: "Playera",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "M",
    brand: "LEVI`S",
    color: "Verde",
    price: 368,
    gender: "Mujer"
  },
  {
    id: 39,
    off: 74,
    name: "Camisa",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "XL",
    brand: "NOVA",
    color: "Celeste",
    price: 360,
    gender: "Kids"
  },
  {
    id: 40,
    off: 78,
    name: "Camisa",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "XL",
    brand: "NOVA",
    color: "Celeste",
    price: 402,
    gender: "Mujer"
  },
  {
    id: 41,
    off: 33,
    name: "Camisa",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "M",
    brand: "NOVA",
    color: "Blanco",
    price: 234,
    gender: "Hombre"
  },
  {
    id: 42,
    off: 38,
    name: "Playera",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "S",
    brand: "H&M",
    color: "Verde",
    price: 263,
    gender: "Mujer"
  },
  {
    id: 43,
    off: 31,
    name: "Camisa",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "X",
    brand: "NOVA",
    color: "Amarillo",
    price: 560,
    gender: "Mujer"
  },
  {
    id: 44,
    off: 65,
    name: "Camisa",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "X",
    brand: "NOVA",
    color: "Amarillo",
    price: 398,
    gender: "Hombre"
  },
  {
    id: 45,
    off: 18,
    name: "Camisa",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "M",
    brand: "H&M",
    color: "Red",
    price: 291,
    gender: "Mujer"
  },
  {
    id: 46,
    off: 55,
    name: "Camisa",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "XL",
    brand: "NOVA",
    color: "Celeste",
    price: 402,
    gender: "Kids"
  },
  {
    id: 47,
    off: 65,
    name: "Camisa",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "M",
    brand: "NOVA",
    color: "Verde",
    price: 470,
    gender: "Mujer"
  },
  {
    id: 48,
    off: 84,
    name: "Camisa",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "X",
    brand: "NOVA",
    color: "Azul",
    price: 254,
    gender: "Hombre"
  },
  {
    id: 49,
    off: 36,
    name: "Camisa",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "M",
    brand: "LEVI`S",
    color: "Blanco",
    price: 450,
    gender: "Kids"
  },
  {
    id: 50,
    off: 46,
    name: "Camisa",
    url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
    size: "M",
    brand: "Gucci",
    color: "Verde",
    price: 532,
    gender: "Kids"
  }
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
        OrderAZ: (state) => {
          state.data.sort((a, b) => a.name.localeCompare(b.name));
        }
    },

})

export const { PriceMayor, PriceMenor,OrderAZ } = dataSlice.actions;

export default dataSlice.reducer;