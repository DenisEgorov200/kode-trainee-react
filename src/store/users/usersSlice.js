import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  filteredUsers: [],
  keysFilters: [],
  searchText: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
      state.filteredUsers = state.users;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setFilter: (state) => {
      state.filteredUsers = state.users?.filter((item) =>
        state.keysFilters.some((key) =>
          item[key].toLowerCase().includes(state.searchText.toLowerCase()),
        ),
      );
    },
    setKeysFilters: (state, action) => {
      state.keysFilters = action.payload;
    },
    setSorted: (state, action) => {
      const sortByAlphabet = (a, b) => a.firstName.localeCompare(b.firstName);
      const sortByBirthday = (a, b) =>
        new Date(a.birthday).getTime() - new Date(b.birthday).getTime();

      state.filteredUsers = state.filteredUsers.sort(
        action.payload === 'alphabet' ? sortByAlphabet : sortByBirthday,
      );
    },
  },
});

export const { setUsers, setSearchText, setFilter, setKeysFilters, setSorted } = usersSlice.actions;

export default usersSlice.reducer;
