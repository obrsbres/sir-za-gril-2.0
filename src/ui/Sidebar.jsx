import styled from 'styled-components';
import Logo from './Logo';
import MainNav from './MainNav';
import React from 'react';

const StyledSidebar = styled.aside`
  justify-self: flex-start;
  align-self: flex-start;
  background-color: var(--color-grey-0);
  margin-right: 5px;
  height: 100%;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-right: 3px solid var(--color-green-700);
  border-top: 3px solid var(--color-green-700);
  border-radius: 8px;
  transition: 1s ease-in-out;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
