import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    data: [],
    loading: false,
    error: null
}

export const FetchData = createAsyncThunk('data/cocktail', async () => {
    const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
    return response.data
})

export const FetchDataId = createAsyncThunk('data/cocktailId', async ({ id }) => {
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    return response.data;
});

export const FetchSearch = createAsyncThunk('data/cocktailSearch', async ({ search }) => {
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
    return response.data;
});

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder

            // Data
            .addCase(FetchData.pending, (state) => {
                state.loading = true
            })
            .addCase(FetchData.fulfilled, (state, action) => {
                state.data = action.payload.drinks
            })
            .addCase(FetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })

            // Id
            .addCase(FetchDataId.pending, (state) => {
                state.loading = true
            })
            .addCase(FetchDataId.fulfilled, (state, action) => {
                state.data = action.payload.drinks
            })
            .addCase(FetchDataId.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })

            // Search
            .addCase(FetchSearch.pending, (state) => {
                state.loading = true
            })
            .addCase(FetchSearch.fulfilled, (state, action) => {
                state.data = action.payload.drinks
            })
            .addCase(FetchSearch.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
    }
})

export default dataSlice.reducer