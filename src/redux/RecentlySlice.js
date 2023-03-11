import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

// First, create the thunk
export const fetchRecentlyFilms = createAsyncThunk(
    'Recently/fetchRecentlyFilms',
    async () => {
        const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=999b028eee6bee82aa3d5b6fce42ef9b')
        return response.data
    }
)

export const FilmsRecentlySlice = createSlice({
    name: 'Recently',
    initialState: {
        recently: [],
        status: null
    },
    reducers: {},
    // update extraReducers to use builder callback notation
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecentlyFilms.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchRecentlyFilms.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.recently = action.payload.results
            })
            .addCase(fetchRecentlyFilms.rejected, (state) => {
                state.status = 'failed'
            });
    },
})

export default FilmsRecentlySlice.reducer
