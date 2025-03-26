import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    cartData: [],
    total: 0
}


export const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const data = action.payload;
            const ind = state.cartData.findIndex(item => item.id === data.id);
            if(ind === -1){
                state.cartData.push({...data,quantity:1});
            }
            else{
                state.cartData.map((item)=>{
                    if(item.id === data.id){
                        item.quantity++;
                    }
                })
            }
            state.total=Math.round((state.total+data.price)*100)/100;
        },
        removeToCart:(state,action)=>{
            const data = action.payload;
            state.cartData.map((item)=>{
                if(item.id=== data.id){
                    item.quantity--;
                }
            })
            state.cartData = state.cartData.filter((item)=> item.quantity !== 0)

            state.total= Math.round((state.total-data.price)*100)/100;
        },
        addOnlyOnce:(state,action)=>{
            const data = action.payload;
            const ind = state.cartData.findIndex((item)=> item.id === data.id)
            if(ind === -1){
                state.cartData.push({
                    ...data,
                    quantity:1
                })
                state.total=Math.round((state.total+data.price)*100)/100;
            }
        }
    }
})


export const {addToCart,removeToCart,addOnlyOnce} =  cartSlice.actions

export default cartSlice.reducer