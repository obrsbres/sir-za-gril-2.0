import { useDispatch, useSelector } from 'react-redux';

import '@fontsource/lora';
import styled from 'styled-components';

import { hide } from '../features/customer/customerSlice';

import Headline from '../features/dashboard/Headline';
import Goods from '../features/dashboard/Goods';
import FirstBoxHeadline from '../features/dashboard/FirstBoxHeadline';
import DashStats from '../features/dashboard/DashStats';
import About from '../features/dashboard/About';
import { useEffect, useState } from 'react';
import { setPc, setTabPort } from '../features/dashboard/dashboardSlice';
import useScreenWidth from '../hooks/useScreenWidth';
//https://weblium.com/templates/demo/small-farm-website-design-4

const StyeldDashboard = styled.div`
  height: 490vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100vh 60vh 70vh 60vh 20vh 80vh 60vh 30vh;
  background-color: #ebc971;
  font-family: 'Lora', serif;
`;

function Dashboard() {
  const isSidebarOn = useSelector((state) => state.sidebar.showSidebar);
  const dispatch = useDispatch();

  const screenWidth = useScreenWidth();

  if (screenWidth > 850) dispatch(setPc());
  else dispatch(setTabPort());

  const displaySize = useSelector((state) => state.dashboard.displayWidth);

  console.log(screenWidth, displaySize, isSidebarOn);

  isSidebarOn && dispatch(hide());

  return (
    <StyeldDashboard>
      <Headline />

      <Goods />
      <About />
      <DashStats />
    </StyeldDashboard>
  );
}

export default Dashboard;
