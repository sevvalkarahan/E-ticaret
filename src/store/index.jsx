import { configureStore } from '@reduxjs/toolkit'
import products from './product'
import category from './category'
import filters from './filters'
export const store = configureStore({
    reducer: {
        products,
        category,
        filters
    },
})