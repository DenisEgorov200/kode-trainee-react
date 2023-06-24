import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    users: [],
    filteredUsers: [],
    categoryId: 0,
    category: { name: 'Все', type: 'all' },
    searchFilter: '',
  },
  reducers: {
    setUser: (state, action) => {
      state.users = action.payload;

      state.filteredUsers = state.users;
    },
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSearchFilter: (state, action) => {
      state.searchFilter = action.payload;

      state.filteredUsers = state.users.filter((user) =>
        user.firstName.toLowerCase().includes(state.searchFilter.toLowerCase()),
      );
    },
  },
});

export const { setUser, setCategoryId, setSearchFilter, setCategory } = filterSlice.actions;

export default filterSlice.reducer;
