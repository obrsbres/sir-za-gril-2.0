import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showSidebar: true,
 
};

const showSidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    show(state) {
      state.showSidebar = true;
    },
    hide(state) {
      state.showSidebar = false;
    },
  },
});

export const {  show, hide } = showSidebarSlice.actions;

export default showSidebarSlice.reducer;
