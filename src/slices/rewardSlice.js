import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  points:0
}

export const rewardSlice = createSlice({
  name: 'reward',
  initialState,
  reducers: {
    increment: (state) => {
      state.points += 1
    }
  },
})

export const { increment } = rewardSlice.actions

export default rewardSlice.reducer