import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showInputForm: false,
};

const showInputFormSlice = createSlice({
  name: 'inputForm',
  initialState,
  reducers: {
    changeShowInputState(state, action) {
      state.showInputForm = action.payload;
    },
    show(state) {
      state.showInputForm = true;
    },
    hide(state) {
      state.showInputForm = false;
    },
  },
});

export const { show, hide, changeShowInputState } = showInputFormSlice.actions;

export default showInputFormSlice.reducer;
