import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    searchFilter: '',
  },
  reducers: {
    setSearchFilter: (state, action) => {
      state.searchFilter = action.payload;
    },
  },
});

export const { setUser, setSearchFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
