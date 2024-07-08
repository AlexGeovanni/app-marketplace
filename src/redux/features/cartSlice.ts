
import { createSlice } from "@reduxjs/toolkit";

// interface dataset{
//     id:number
//     url:string
//     name:string
//     price:number
//     quantity:number
// }

const data=[
    {
        id:1,
        url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
        name:"Producto 1",
        price:100,
        quantity:1
    },
    {
        id:2,
        name:"Producto 2",
        url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
        price:200,
        quantity:1
    },
    {
        id:3,
        name:"Producto 3",
        url:"https://touchemexico.com/cdn/shop/products/Pantalon-PH30031-F.jpg?v=1671208900",
        price:300,
        quantity:1
    }
]

export const cartProductSlice= createSlice({
    name:"cart",
    initialState:data,
    reducers:{
        addToCart:(state,action)=>{
            const item=state.find((product)=>product.id===action.payload.id)
            if(item)item.quantity+=action.payload.quantity

            state.push(action.payload)
            
        },
        incrementQuantity:(state,action)=>{
            const item=state.find((product)=>product.id===action.payload.id)
            if(item)item.quantity=action.payload.value
        },
        decrementQuantity:(state,action)=>{
            const item=state.find((product)=>product.id===action.payload.id)
            if(item)item.quantity=action.payload.value
        },
        removeFromCart:(state,action)=>{
            state.splice(state.findIndex((product)=>product.id===action.payload),1)
        }
    }
})


export const {addToCart,removeFromCart,incrementQuantity}=cartProductSlice.actions

export default cartProductSlice.reducer