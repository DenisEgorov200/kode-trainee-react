import { createSlice } from '@reduxjs/toolkit';

const sortSlice = createSlice({
  name: 'sort',
  initialState: {
    sortId: 0,
    sortBy: { name: 'По алфавиту', type: 'alphabet' },
  },
  reducers: {
    setSortId: (state, action) => {
      state.sortId = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const { setSortId, setSortBy } = sortSlice.actions;

export default sortSlice.reducer;
