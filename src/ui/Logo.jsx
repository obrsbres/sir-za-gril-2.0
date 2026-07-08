import styled from 'styled-components';
import React from 'react';

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 15rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src='/logo-sir.png' alt='Logo' />
    </StyledLogo>
  );
}

export default Logo;
