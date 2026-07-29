import styled from 'styled-components';
import React from 'react';

const StyledRemoveRowButton = styled.button`
  /* background: none; */
  border: none;
  padding: 0.6rem;
  border-radius: 1px;
  transition: all 0.2s;
  color: var(--color-red-800);
  &:hover {
    background-color: var(--color-red-100);
  }

  /* & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-brand-600);
  } */
`;
function RemoveRowButton({ children, onClick }) {
  return (
    <StyledRemoveRowButton onClick={onClick}>{children}</StyledRemoveRowButton>
  );
}

export default RemoveRowButton;
