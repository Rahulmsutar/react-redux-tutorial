import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
}

export const CounterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = CounterSlice.actions

export default CounterSlice.reducer