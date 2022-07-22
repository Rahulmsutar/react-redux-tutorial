import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    color: "",
}

export const ThemeSlice = createSlice({
    name: 'text color',
    initialState: initialState,
    reducers: {
        themeTextColor: (state, action) => {
            state.color = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {  themeTextColor } = ThemeSlice.actions

export default ThemeSlice.reducer