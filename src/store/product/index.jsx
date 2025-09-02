import { createSlice } from '@reduxjs/toolkit'
import { Products } from '../../data/products'

const initialState = {
    filteredProduct: Products,

}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        _filtered: (state, action) => {
            state.filteredProduct = Products.filter(product => product.type === action.payload)
        }
    },
})

export const { _filtered } = productSlice.actions

export default productSlice.reducer