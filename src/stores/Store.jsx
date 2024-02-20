import { configureStore } from '@reduxjs/toolkit'
import  tvReducer from './reducers/TvSlice'
import personReducer from './reducers/PersonSlice'
import movieReducer from './reducers/MovieSlice'

export const store = configureStore({
  reducer: {
    tv:tvReducer,
    person:personReducer,
    movie:movieReducer
  },
})