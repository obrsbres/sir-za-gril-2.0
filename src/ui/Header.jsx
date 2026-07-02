import React from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { show } from '../features/customer/customerSlice';
import { useDispatch, useSelector } from 'react-redux';

const StyledHeader = styled.header`
  grid-column: 1/-1;
  width: 100vw;
  background-color: #f9f9f7;
  padding: 1rem;
  border-bottom: 1px solid var(--color-grey-100);
`;
const StyledButtonHeader = styled.button`
  border: 2px solid var(--color-grey-900);
  border-radius: 30%;
  display: flex;
  padding: 5px;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.6rem;
  font-weight: bolder;
  text-transform: uppercase;
  color: #1f1f1f;
  background-color: #d6def3;
  height: 100%;
  flex-wrap: wrap;
`;

function Header() {
  const dispatch = useDispatch();

  const isSidebarShown = useSelector((state) => 
    state.sidebar.showSidebar
  );
  return (
    <StyledHeader>
      {!isSidebarShown && (
        <StyledButtonHeader onClick={() => dispatch(show())}>
          <Link to="dashboard">Почетна</Link>
        </StyledButtonHeader>
      )}
    </StyledHeader>
  );
}

export default Header;
