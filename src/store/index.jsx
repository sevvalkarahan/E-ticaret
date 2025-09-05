import { configureStore } from '@reduxjs/toolkit'
import products from './product'
import category from './category'
import filters from './filters'
import auth from './authSlice'

export const store = configureStore({
    reducer: {
        products,
        category,
        filters,
        auth,
    },
})