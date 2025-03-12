import { createSlice } from '@reduxjs/toolkit'

const getCartFromStorage = () => {
    if (localStorage.getItem('cart')) {
        return JSON.parse(localStorage.getItem('cart'))
    }
    return [];
}
const initialState = {
    products: getCartFromStorage(),
    drawer: false,
    totalAmount: 0
    
}

const writeFromCartToStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
}



export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const findProduct = state.products && state.products.find((product) => product.id === action.payload.id);
            if (findProduct) {
                //daha onceden eklenmistir
                const extractedProducts = state.products.filter((product) => product.id !== action.payload.id);
                findProduct.count += action.payload.count;
                state.products = [...extractedProducts, findProduct];
                writeFromCartToStorage(state.products)
                
            } else {
                state.products = [...state.products, action.payload];
                writeFromCartToStorage(state.products);
            }
        },
        setDrawer: (state) => {
            state.drawer = !state.drawer
        },
        calculateCart: (state) => {
            state.totalAmount = 0;
            state.products && state.products.map((product) => {
                state.totalAmount += product.price * product.count;
            })
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload.id)
            
            state.totalAmount = 0;
            state.products.map((product) => {
                state.totalAmount += product.price * product.count;
            })

            writeFromCartToStorage(state.products);
        }


    }
})

export const { addToCart, setDrawer, calculateCart, removeProduct } = cartSlice.actions
export default cartSlice.reducer