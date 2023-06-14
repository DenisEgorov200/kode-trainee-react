import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464',
  }),
  endpoints: () => ({}),
});
