import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    filteredUsers: [],
    keysFilters: [],
    searchText: '',
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;

      state.filteredUsers = state.users?.filter((item) =>
        state.keysFilters.some((key) =>
          item[key].toLowerCase().includes(state.searchText.toLowerCase()),
        ),
      );
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setKeysFilters: (state, action) => {
      state.keysFilters = action.payload;
    },
    setSorted: (state, action) => {
      if (action.payload === 'alphabet') {
        state.filteredUsers = state.filteredUsers.sort((a, b) =>
          a.firstName.localeCompare(b.firstName),
        );
      } else {
        state.filteredUsers = state.filteredUsers.sort(
          (a, b) => new Date(a.birthday).getTime() - new Date(b.birthday).getTime(),
        );
      }
    },
  },
});

export const { setUsers, setSearchText, setKeysFilters, setSorted } = usersSlice.actions;

export default usersSlice.reducer;
