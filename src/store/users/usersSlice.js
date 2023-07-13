import { createSlice } from '@reduxjs/toolkit';
import { sortByBirthday } from 'components/utils/sortByBirthday.js';
import { sortByAlphabet } from 'components/utils/sortByAlphabet.js';

const initialState = {
  users: [],
  filteredUsers: [],
  sortedUsers: [],
  sortedBirthdays: [],
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
      state.sortedUsers = state.filteredUsers;
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
      const today = new Date().getMonth();

      state.sortedBirthdays = state.sortedUsers
        ?.filter((user) => new Date(user.birthday).getMonth() >= today)
        ?.sort(sortByBirthday);

      const notSortedBirthdays = state.sortedUsers
        ?.filter((user) => !state.sortedBirthdays.includes(user))
        ?.sort(sortByBirthday);

      state.sortedUsers =
        action.payload === 'alphabet'
          ? state.filteredUsers?.sort(sortByAlphabet)
          : [...state.sortedBirthdays, ...notSortedBirthdays];
    },
  },
});

export const { setUsers, setSearchText, setFilter, setKeysFilters, setSorted } = usersSlice.actions;

export default usersSlice.reducer;
