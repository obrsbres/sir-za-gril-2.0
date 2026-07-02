import styled from 'styled-components';
import React from 'react';
/* eslint-disable react/prop-types */
const StyledLogo = styled.div`
  text-align: left;
  color: var(--color-red-800);
  background-color: var(--color-red-100);
  height: 2 rem;
  width: auto;
  display: flex;
  align-items: center;
  font-size: 14pt;
  font-weight: bold;
  font-style: italic;
`;

const Img = styled.img`
  height: 1.5rem;
  width: auto;
`;

function Error({ children }) {
  return <StyledLogo>{children}</StyledLogo>;
}

export default Error;
