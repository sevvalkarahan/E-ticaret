import { createSlice } from '@reduxjs/toolkit'
import { Products } from '../../data/products'

const initialState = {
    filteredProduct: Products,
    selectedProduct: {},
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        _filtered: (state, action) => {
            state.filteredProduct = Products.filter(product => product.type === action.payload)
        },
        _selectedProduct: (state, action) => {
            state.selectedProduct = action.payload
        },
    },
})

export const { _filtered, _selectedProduct } = productSlice.actions

export default productSlice.reducer