import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    users: [],
    filteredUsers: [],
    searchFilter: '',
  },
  reducers: {
    setUser: (state, action) => {
      state.users = action.payload;

      state.filteredUsers = state.users;
    },
    setSearchFilter: (state, action) => {
      state.searchFilter = action.payload;

      state.filteredUsers = state.users.filter((user) =>
        user.firstName.toLowerCase().includes(state.searchFilter.toLowerCase()),
      );
    },
  },
});

export const { setUser, setSearchFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
