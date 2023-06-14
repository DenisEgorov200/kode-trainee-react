import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiSlice } from '@/store/apiSlice.js';

const usersApiSlice = apiSlice.injectEndpoints({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464',
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users?__example=all',
    }),
  }),
});

export const { useGetUsersQuery } = usersApiSlice;
