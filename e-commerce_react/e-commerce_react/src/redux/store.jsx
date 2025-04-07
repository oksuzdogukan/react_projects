import { configureStore } from '@reduxjs/toolkit'
import appReducer from '../redux/slices/appSlice'
import productReducer from '../redux/slices/productSlice'
import cartReducer from '../redux/slices/cartSlice'



export const store = configureStore({
    reducer: {
        app: appReducer,
        products: productReducer,
        cart: cartReducer

    },
})