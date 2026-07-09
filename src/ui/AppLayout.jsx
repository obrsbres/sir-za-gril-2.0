import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';

import useScreenWidth from '../hooks/useScreenWidth';
import { setPageSize } from '../features/customer/customerSlice';

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
  grid-template-columns: ${(props) =>
    props.$pageSize === 'mobile' ? '1fr 4fr' : '26rem 1fr'};
  grid-template-rows: 100vh;
`;

const StyledMain = styled.main`
  background-color: var(--color-grey-50);
  position: sticky;
  width: fill-available;
  height: auto;
`;

function AppLayout() {
  const screenWidth = useScreenWidth();
  const dispatch = useDispatch();
  if (screenWidth < 600) {
    dispatch(setPageSize('mobile'));
  } else if (screenWidth < 1024) {
    dispatch(setPageSize('tablet'));
  } else {
    dispatch(setPageSize('desktop'));
  }
  const pageSize = useSelector((state) => state.sidebar.pageSize);
  const location = useLocation();
  const pathName = location.pathname.split('/')[1];
  const hideSidebar =
    useSelector((state) => state.sidebar.showSidebar) &&
    pathName !== 'dashboard';

  // if ()

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
