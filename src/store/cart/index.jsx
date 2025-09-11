import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartProducts: [],
    favoriteProducts: [],
};

export const cartProductSlice = createSlice({
    name: 'cartProducts',
    initialState,
    reducers: {
        setCartProduct: (state, action) => {
            const productToAdd = action.payload;
            const existingProduct = state.cartProducts.find(p => p.id === productToAdd.id);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.cartProducts.push({ ...productToAdd, quantity: 1 });
            }

        },
        incrementQuantity: (state, action) => {
            const productId = action.payload;
            const product = state.cartProducts.find(p => p.id === productId);
            if (product) {
                product.quantity++;
            }
        },
        decrementQuantity: (state, action) => {
            const productId = action.payload;
            const product = state.cartProducts.find(p => p.id === productId);
            if (product && product.quantity > 1) {
                product.quantity--;
            }
            else if (product && product.quantity === 1) {
                state.cartProducts = state.cartProducts.filter(p => p.id !== productId);
            }
        },
        setFavoriteProduct: (state, action) => {
            state.favoriteProducts.push(action.payload);
        },
        setRemoveFromFavorite: (state, action) => {
            state.favoriteProducts = state.favoriteProducts.filter(p => p.id !== action.payload);
        }
    },
});

export const { setCartProduct, incrementQuantity, decrementQuantity, setFavoriteProduct, setRemoveFromFavorite } = cartProductSlice.actions;

export default cartProductSlice.reducer;
