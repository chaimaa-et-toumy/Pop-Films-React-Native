import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchTopFilms = createAsyncThunk(
    'TopFilms/fetchTopFilms',
    async () => {
        const response = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=999b028eee6bee82aa3d5b6fce42ef9b')
        return response.data
    }
)

export const TopFilmsSlice = createSlice({
    name: 'TopFilms',
    initialState: {
        topFilms: [],
        status: null
    },
    reducers: {},
    // update extraReducers to use builder callback notation
    extraReducers: (builder) => {
        builder
            .addCase(fetchTopFilms.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchTopFilms.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.topFilms = action.payload.results
            })
            .addCase(fetchTopFilms.rejected, (state) => {
                state.status = 'failed'
            });
    },
})

export default TopFilmsSlice.reducer
