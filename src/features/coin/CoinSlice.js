import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    coin: 0,
}

export const CoinSlice = createSlice({
    name: 'coin counter',
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.coin += 1
        },
        decrement: (state) => {
            state.coin -= 1
        },
        incrementByAmount: (state, action) => {
            state.coin += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = CoinSlice.actions

export default CoinSlice.reducer