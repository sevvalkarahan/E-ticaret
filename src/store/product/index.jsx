import { createSlice } from '@reduxjs/toolkit'
import { Products } from '../../data/products'
import { all } from 'axios'

const initialState = {
    filteredProduct: Products,
    category: all,
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        _filtered: (state, action) => {
            state.filteredProduct = state.filteredProduct.filter(product => product.category === action.payload)
        },
        _setCategory: (state, action) => {
            state.category = action.payload
        }
    },
})

export const { _filtered } = productSlice.actions

export default productSlice.reducer