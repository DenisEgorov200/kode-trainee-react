import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiSlice } from '@/store/apiSlice.js';
import { setFilter, setUsers } from '@/store/users/usersSlice.js';

const usersApiSlice = apiSlice.injectEndpoints({
  reducerPath: 'apiSlice',
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
          dispatch(setUsers(data.items));
          dispatch(setFilter());
        } catch (err) {
          console.log(err);
        }
      },
    }),
    getCurrentUsers: builder.query({
      query: (arg) => {
        const { id } = arg;

        return `/contact/${id}`;
      },
    }),
  }),
});

export const { useGetUsersQuery, useGetCurrentUsersQuery } = usersApiSlice;
