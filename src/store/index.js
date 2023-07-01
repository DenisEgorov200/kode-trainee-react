import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '@/store/apiSlice';

import usersReducer from '@/store/users/usersSlice.js';
import currentUserReducer from '@/store/users/currentUserSlice.js';
import categoryReducer from '@/store/filter/categorySlice.js';
import sortReducer from '@/store/filter/sortSlice.js';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    users: usersReducer,
    currentUser: currentUserReducer,
    category: categoryReducer,
    sort: sortReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
