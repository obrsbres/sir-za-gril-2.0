import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';
const StyledMain = styled.main`
  background-color: var(--color-grey-50);
  /* padding: 1rem 1.2rem 2rem; */
  /* background-image: url('/bg/main-bg.jpg');
  background-size: 100% auto; /* Adjust as needed: 'contain', '100% 100%', etc. */
  position: sticky;
  width: auto; /* Example: Set dimensions */
  height: auto; /* Example: Set dimensions */
`;
const StyledAppLayout = styled.div`
  /* padding: 2px; */
  /* margin: 2px; */
  display: grid;
  height: 100vh;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: 100vh;
  /* position: relative; */
`;
const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  overflow: hidden;
  height: 100vh;
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
