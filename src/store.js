import { configureStore } from '@reduxjs/toolkit'
import { blogApi } from './features/apiSlice';
import auditSliceReducer from './features/auditSlice';

export const store = configureStore({
  reducer: {
    [blogApi.reducerPath]: blogApi.reducer,
    auditModal: auditSliceReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(blogApi.middleware),
})