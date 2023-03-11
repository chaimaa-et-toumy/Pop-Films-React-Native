import { configureStore } from '@reduxjs/toolkit'
import FilmsSlice from '../redux/FilmsSlice'
import FilmsPopularSlice from '../redux/PopularSlice'
import FilmsRecentlySlice from '../redux/RecentlySlice'
import TopFilmsSlice from '../redux/TopSlice'

export default configureStore({
    reducer: {
        Films: FilmsSlice,
        Popular: FilmsPopularSlice,
        Recently: FilmsRecentlySlice,
        TopFilms: TopFilmsSlice
    }
})