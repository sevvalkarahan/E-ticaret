import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeCategory: 'Tümü',
}

export const categorySlice = createSlice({
    name: 'categoty',
    initialState,
    reducers: {
        setACtiveCategory: (state, action) => {
            state.activeCategory = action.payload
        }
    }

});

export const { setActiveCategory } = categorySlice.actions;

export default categorySlice.reducer;