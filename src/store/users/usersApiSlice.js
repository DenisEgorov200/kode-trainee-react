import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiSlice } from '@/store/apiSlice.js';
import { setUser } from '@/store/filter/filterSlice.js';

const usersApiSlice = apiSlice.injectEndpoints({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464',
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (arg) => {
        const { example } = arg;

        return {
          url: `/users`,
          params: { __example: example },
        };
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data.items));
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const { useGetUsersQuery } = usersApiSlice;
