import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    product: [],
    selectedProduct: {},
    searchTerm: '',
    loading: false
}

const BASE_URL = 'https://fakestoreapi.com';

export const getAllProducts = createAsyncThunk('getAllProducts', async () => {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
})





export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setSelectedProducts: (state, action) => {
            state.selectedProduct = action.payload;
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },

    },
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        })

    }
})

export const { setSelectedProducts, setSearchTerm} = productSlice.actions

export default productSlice.reducer

