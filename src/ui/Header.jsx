import React from 'react';

import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { show, hide } from '../features/customer/customerSlice';
import { useDispatch, useSelector } from 'react-redux';

const StyledHeader = styled.header`
  margin: 1rem 1% 1rem 1%;
  display: grid;
  grid-template-columns: 15rem 15rem 1fr;
  grid-template-rows: 1fr;
  gap: 2rem;
  width: 98%;
  background-color: var(--color-yellow-100);
  padding: 1rem;
  border-bottom: 1px solid var(--color-grey-100);
`;
const StyledButtonHeader = styled.button`
  border: 2px solid var(--color-grey-900);
  border-radius: 8px;
  display: flex;
  padding: 2px;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.6rem;
  font-weight: bolder;
  text-transform: uppercase;
  color: #1f1f1f;
  background-color: #d6def3;
  height: 4rem;
  flex-wrap: wrap;
`;

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { info } = useParams();
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

  console.log(info, pathName);
  const linkedPage = pathName === 'dashboard' ? 'customersData' : 'dashboard';
  return (
    <StyledHeader>
      {pathName !== 'dashboard' && (
        <StyledButtonHeader onClick={handleToogleSidebar}>
          {`${isSidebarShown ? 'Скриј' : 'Прикажи'} мени`}
        </StyledButtonHeader>
      )}
      <StyledButtonHeader onClick={() => navigate(linkedPage)}>
        {`${linkedPage === 'dashboard' ? 'Почетна' : 'Преглед доставе'}`}
      </StyledButtonHeader>
    </StyledHeader>
  );
}

export default Header;
