import styled from 'styled-components';
const StyledNewRowButton = styled.button`
  /* background: none; */
  border: none;
  padding: 0.6rem;
  border-radius: 1px;
  transition: all 0.2s;
  color: var(--color-grey-700);
  &:hover {
    background-color: var(--color-red-100);
  }

  /* & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-brand-600);
  } */
`;
import React from 'react';
/* eslint-disable react/prop-types */
function NewRowButton({ children, onClick, type }) {
  return (
    <StyledNewRowButton type={type} onClick={onClick}>
      {children}
    </StyledNewRowButton>
  );
}

export default NewRowButton;
