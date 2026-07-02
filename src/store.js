import { configureStore } from '@reduxjs/toolkit';

import sidebarReducer from './features/customer/customerSlice';
import customersReducer from './features/delivery/customersSlice';
import showInputFormReducer from './features/delivery/showFormSlice';
import dashboardReducer from './features/dashboard/dashboardSlice';

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    customers: customersReducer,
    inputForm: showInputFormReducer,
    dashboard: dashboardReducer,
  },
});

export default store;
