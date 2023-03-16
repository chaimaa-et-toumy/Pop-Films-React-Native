import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchFilms = createAsyncThunk(
    'Films/fetchFilms',
    async () => {
        const response = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=999b028eee6bee82aa3d5b6fce42ef9b')
        return response.data
    }
)

export const FilmsSlice = createSlice({
    name: 'Films',
    initialState: {
        films: [],
        status: null
    },
    reducers: {},
    // update extraReducers to use builder callback notation
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilms.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchFilms.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.films = action.payload.results
            })
            .addCase(fetchFilms.rejected, (state) => {
                state.status = 'failed'
            });
    },
})

export default FilmsSlice.reducer
