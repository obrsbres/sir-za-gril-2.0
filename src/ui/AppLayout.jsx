import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styled from 'styled-components';

import Header from './Header';
import Sidebar from './Sidebar';

import useScreenWidth from '../hooks/useScreenWidth';

const StyledAppLayout = styled.div`
  display: flex;
  height: fill-available;
  width: fill-available;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  overflow: auto;
  height: 100vh;
  width: 100vw;
`;

const StyledMain = styled.main`
  background-color: var(--color-grey-50);
  position: sticky;
  width: fill-available;
  height: auto;
`;

function AppLayout() {
  const screenWidth = useScreenWidth();
  const pageSize = useScreenWidth();
  const location = useLocation();
  const pathName = location.pathname.split('/')[1];
  const hideSidebar =
    useSelector((state) => state.sidebar.showSidebar) &&
    pathName !== 'dashboard';

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
