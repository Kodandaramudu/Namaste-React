import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem: (state,action)=>{
          state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
          state.items.pop();
        },
        cleareItem:(state,action)=>{
            state.items.length = 0;
        }
    },
});
export const {addItem,removeItem,cleareItem} = cartSlice.actions;

export default cartSlice.reducer;