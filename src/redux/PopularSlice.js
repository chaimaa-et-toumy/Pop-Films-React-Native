import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

// First, create the thunk
export const fetchPopularFilms = createAsyncThunk(
    'Popular/fetchPopularFilms',
    async () => {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=999b028eee6bee82aa3d5b6fce42ef9b')
        return response.data
    }
)

export const FilmsPopularSlice = createSlice({
    name: 'Popular',
    initialState: {
        popular: [],
        status: null
    },
    reducers: {},
    // update extraReducers to use builder callback notation
    extraReducers: (builder) => {
        builder
            .addCase(fetchPopularFilms.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchPopularFilms.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.popular = action.payload.results
            })
            .addCase(fetchPopularFilms.rejected, (state) => {
                state.status = 'failed'
            });
    },
})

export default FilmsPopularSlice.reducer
