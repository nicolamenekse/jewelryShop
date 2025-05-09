import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

axios.defaults.baseURL = "https://fakestoreapi.com/"

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/products")
            return response.data
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message)
        }
    }
)


export const addTask = createAsyncThunk("products/addTask", async (task, thunkAPI) => {
    try {
        const response = await axios.post("/products", task)
        return response.data
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message)
    }
})

