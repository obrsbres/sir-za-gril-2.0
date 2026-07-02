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
    // getCustomersData(state) {
    //   const { data } = useQuery({
    //     queryKey: ['current_delivery'],
    //     queryFn: getDeliveries,
    //   });
    //   if (!data) return;
    //   const customers = [...data].sort(
    //     (custA, custB) => custA.num_in_delivery - custB.num_in_delivery
    //   );
    //   state.customers = customers;
    // },
  },
});

export const { getCustomersData, sendCustomerForDeliveryView, setNewValue } =
  customersSlice.actions;

export default customersSlice.reducer;
