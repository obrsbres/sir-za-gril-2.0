import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styled from 'styled-components';

import Header from './Header';
import Sidebar from './Sidebar';

import useScreenWidth from '../hooks/useScreenWidth';

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 5rem 1fr;
  justify-items: start;
  align-items: start;
  overflow: auto;
  height: 100vh;
  width: 100vw;
`;

const StyledAppLayout = styled.div`
  grid-row: 2/2;
  position: relative;
  display: flex;
  height: fill-available;
  width: fill-available;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  overflow-y: auto;
`;

const StyledMain = styled.main`
  background-color: var(--color-grey-50);
  position: relative;
  width: fill-available;
  height: auto;
  overflow-y: auto;
`;

function AppLayout() {
  const pageSize = useScreenWidth();
  const hideSidebar = useSelector((state) => state.sidebar.showSidebar);
  return (
    <StyledContainer>
      <Header />
      <StyledAppLayout $pageSize={pageSize}>
        {hideSidebar && <Sidebar />}
        <StyledMain>
          <Outlet />
        </StyledMain>
      </StyledAppLayout>
    </StyledContainer>
  );
}

export default AppLayout;
