import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '@/store/apiSlice';

import filterReducer from '@/store/filter/filterSlice.js';
import categoryReducer from '@/store/filter/categorySlice.js';
import sortReducer from '@/store/filter/sortSlice.js';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    filter: filterReducer,
    category: categoryReducer,
    sort: sortReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
