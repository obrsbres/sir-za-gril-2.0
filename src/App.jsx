import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TanStackDevtools } from '@tanstack/react-devtools';
import { hotkeysDevtoolsPlugin } from '@tanstack/react-hotkeys-devtools';
import AppLayout from './ui/AppLayout';
import Dashboard from './pages/Dashboard';
import CustomerInDelivery from './pages/CustomerInDelivery';
import CustomersData from './pages/CustomersData';
import Delivery from './pages/Delivery';
import Summary from './pages/Summary';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import React from 'react';

const queryCl = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 100,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryCl}>
      <TanStackDevtools plugins={[hotkeysDevtoolsPlugin()]} />
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <GlobalStyles />
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="customer" element={<CustomerInDelivery />} />
            <Route path="customersData" element={<CustomersData />} />
            <Route path="delivery" element={<Delivery />} />
            <Route path="summary" element={<Summary />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        postion="top-center"
        gutter={12}
        container-style={{
          success: {
            duration: 3000,
          },
          errors: {
            duration: 5000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: ' #456',
            color: '#ba9',
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
