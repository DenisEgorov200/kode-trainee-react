import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    users: [],
    filteredUsers: [],
    categoryId: 0,
    searchFilter: '',
    sortBy: { name: 'Все', type: 'all' },
  },
  reducers: {
    setUser: (state, action) => {
      state.users = action.payload;

      state.filteredUsers = state.users;
    },
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setSearchFilter: (state, action) => {
      state.searchFilter = action.payload;

      state.filteredUsers = state.users.filter((user) =>
        user.firstName.toLowerCase().includes(state.searchFilter.toLowerCase()),
      );
    },
    setSort: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const { setUser, setCategoryId, setSearchFilter, setSort } = filterSlice.actions;

export default filterSlice.reducer;
