import { configureStore } from '@reduxjs/toolkit'
import { blogApi } from './features/apiSlice'

export const store = configureStore({
  reducer: {

    [blogApi.reducerPath]: blogApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(blogApi.middleware),
})