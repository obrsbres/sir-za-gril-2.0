import styled from 'styled-components';
import Logo from './Logo';
import MainNav from './MainNav';
import React from 'react';

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  border-right: 3px solid var(--color-green-700);
  /* position: absolute; */

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
