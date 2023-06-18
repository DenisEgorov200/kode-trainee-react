import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiSlice } from '@/store/apiSlice.js';

const usersApiSlice = apiSlice.injectEndpoints({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464',
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (arg) => {
        const { example } = arg;
        console.log(example);

        return {
          url: `/users`,
          params: { __example: example },
        };
      },
    }),
  }),
});

export const { useGetUsersQuery } = usersApiSlice;
