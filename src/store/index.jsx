import { configureStore } from '@reduxjs/toolkit'
import products from './product'
import category from './category'
export const store = configureStore({
    reducer: {
        products,
        category
    },
})