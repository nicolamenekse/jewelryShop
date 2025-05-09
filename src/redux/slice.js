import { createSlice } from "@reduxjs/toolkit"
import { fetchProducts, addTask } from "./operations"

const initialState = {
    products: [],
    isLoading: false,
    error: null
}

export const productSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload
                state.isLoading = false
                state.error = null
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(addTask.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(addTask.fulfilled, (state, action) => {
                state.products.push(action.payload)
                state.isLoading = false
                state.error = null
            })
            .addCase(addTask.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export default productSlice.reducer