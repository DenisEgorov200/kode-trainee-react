import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categoryId: 0,
    category: { name: 'Все', type: 'all' },
  },
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setCategoryId, setCategory } = categorySlice.actions;

export default categorySlice.reducer;
