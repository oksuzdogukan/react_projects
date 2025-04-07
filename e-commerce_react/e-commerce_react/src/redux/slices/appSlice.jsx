import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {

    }
})

export const { } = appSlice.actions

export default appSlice.reducer

