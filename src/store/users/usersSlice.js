import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    filteredUsers: [],
    searchText: '',
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;

      state.filteredUsers = state.users;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setFilter: (state, action) => {
      state.filteredUsers = state.users?.filter((item) =>
        action.payload.some((key) =>
          item[key].toLowerCase().includes(state.searchText.toLowerCase()),
        ),
      );
    },
  },
});

export const { setUsers, setSearchText, setFilter } = usersSlice.actions;

export default usersSlice.reducer;
