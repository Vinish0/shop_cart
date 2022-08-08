import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
  name:"cart",
  initialState:{
    cartItems: localStorage.getItem("cartItem")? JSON.parse(localStorage.getItem("cartItem")):[]
  },
  reducers:{
    addCart:((state,action)=>{
        state.cartItems.push(action.payload)
        
        
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    }),
    removeCart:((state,action)=>{

     
      state.cartItems = state.cartItems.filter((item)=>item.id !== action.payload)
      
    }),
   
  }
})


export const {addCart,removeCart} = cartSlice.actions
export default cartSlice.reducer