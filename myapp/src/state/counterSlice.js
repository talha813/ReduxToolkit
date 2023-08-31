import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  todo:[]
}
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    addtodolist:(state,action)=>
    {
      state.todo.push(action.payload)
    },
    removetodolist:(state,action)=>
    {
       const remove= state.todo.filter((value,index)=>index !== action.payload);
       state.todo=remove
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,addtodolist,removetodolist} = counterSlice.actions

export default counterSlice.reducer