import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  amount: 1,
  value : 0
}

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    increment: (state) => {
      state.amount += 1
    },
    decrement: (state) => {
      state.amount -= 1
    },
    incrementByAmount: (state,action) => {
      state.amount += action.payload
    },
    value: (state,action)=>{
        state.value = action.payload 
    }
  },
})

export const { increment, decrement, incrementByAmount ,value} = accountSlice.actions

export default accountSlice.reducer