import { createSlice } from '@reduxjs/toolkit';
import { useQuery } from '@tanstack/react-query';
import { getDeliveries } from '../../services/apiDeliveries';

const initialState = {
  customers: [],
  customerInDelivery: {},
  newValue: '',
};

const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    sendCustomerForDeliveryView(state, action) {
      state.customerInDelivery = action.payload;
    },
    setNewValue(state, action) {
      state.newValue = action.payload;
    },
  },
});

export const { sendCustomerForDeliveryView, setNewValue } =
  customersSlice.actions;

export default customersSlice.reducer;
