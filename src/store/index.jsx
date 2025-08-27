import { configureStore } from '@reduxjs/toolkit'
import products from './product'
export const store = configureStore({
    reducer: {
        products
    },
})