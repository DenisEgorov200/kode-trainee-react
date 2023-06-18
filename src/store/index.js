import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '@/store/apiSlice';
import filterReducer from '@/store/filter/filterSlice.js';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
