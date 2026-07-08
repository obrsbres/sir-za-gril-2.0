import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styled from 'styled-components';

import Header from './Header';
import Sidebar from './Sidebar';

const StyledContainer = styled.div`
  display: grid;
  justify-items: start;
  align-items: start;
  justify-content: start;
  align-content: start;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 10fr;
  overflow: auto;
  height: 100vh;
  width: 100vw;
`;

const StyledAppLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: 100vh;
`;

const StyledMain = styled.main`
  background-color: var(--color-grey-50);
  position: sticky;
  width: auto;
  height: auto;
`;

function AppLayout() {
  const location = useLocation();
  const pathName = location.pathname.split('/')[1];
  const hideSidebar =
    useSelector((state) => state.sidebar.showSidebar) &&
    pathName !== 'dashboard';
  return (
    <StyledContainer>
      <Header />
      <StyledAppLayout>
        {hideSidebar && <Sidebar />}
        <StyledMain>
          <Outlet />
        </StyledMain>
      </StyledAppLayout>
    </StyledContainer>
  );
}

export default AppLayout;
