import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchSearchFilms = createAsyncThunk(
    'SearchFilms/fetchSearchFilms',
    async (query) => {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=999b028eee6bee82aa3d5b6fce42ef9b&query=${query}&page=1`)
        return response.data
    }
)

export const SearchFilmsSlice = createSlice({
    name: 'SearchFilms',
    initialState: {
        searchFilms: [],
        status: null
    },
    reducers: {},
    // update extraReducers to use builder callback notation
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearchFilms.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchSearchFilms.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.searchFilms = action.payload.results
            })
            .addCase(fetchSearchFilms.rejected, (state) => {
                state.status = 'failed'
            });
    },
})

export default SearchFilmsSlice.reducer
