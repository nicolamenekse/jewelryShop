import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slice.js";
export const store = configureStore({
    reducer: {
        products: productSlice
    }
})