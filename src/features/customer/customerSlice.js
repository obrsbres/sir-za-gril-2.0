import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showSidebar: true,
  pageSize: 'desktop', // Possible values: 'desktop', 'tablet', 'mobile'
};

const showSidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setPageSize(state, action) {
      state.pageSize = action.payload;
    },
    show(state) {
      state.showSidebar = true;
    },
    hide(state) {
      state.showSidebar = false;
    },
  },
});

export const { setPageSize, show, hide } = showSidebarSlice.actions;

export default showSidebarSlice.reducer;
