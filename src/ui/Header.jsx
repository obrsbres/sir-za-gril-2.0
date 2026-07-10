import React from 'react';

import { Link, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { show, hide } from '../features/customer/customerSlice';
import { useDispatch, useSelector } from 'react-redux';

const StyledHeader = styled.header`
  margin: 2px 1px 2px 1px;
  display: grid;
  grid-template-columns: 15rem 15rem 1fr;
  grid-template-rows: 1fr;
  gap: 2rem;
  width: 98%;
  height: 5vh;
  justify-content: start;
  align-items: center;
  background-color: var(--color-yellow-100);
  /* padding: 1rem; */
  /* border-bottom: 1px solid var(--color-green-700); */
`;
const StyledButtonHeader = styled.button`
  border: 1px solid var(--color-indigo-700);
  border-radius: 8px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.6rem;
  font-weight: bolder;
  text-transform: uppercase;
  color: #1f1f1f;
  background-color: var(--color-indigo-700);
  color: var(--color-indigo-100);
  height: 4vh;
  flex-wrap: wrap;
`;

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const pathName = location.pathname.split('/')[1];
  const isSidebarShown = useSelector((state) => state.sidebar.showSidebar);
  function handleToogleSidebar() {
    if (isSidebarShown) {
      dispatch(hide());
    }
    if (!isSidebarShown) {
      dispatch(show());
    }
  }

  const linkedPage = pathName === 'dashboard' ? 'customersData' : 'dashboard';
  return (
    <StyledHeader>
      {pathName !== 'dashboard' && (
        <StyledButtonHeader onClick={handleToogleSidebar}>
          {`${isSidebarShown ? 'Скриј' : 'Прикажи'} мени`}
        </StyledButtonHeader>
      )}
      <StyledButtonHeader onClick={() => navigate(linkedPage)}>
        {`${linkedPage === 'dashboard' ? 'Почетна' : 'Достава'}`}
      </StyledButtonHeader>
    </StyledHeader>
  );
}

export default Header;
