import React from 'react';
import styled from 'styled-components';

/* eslint-disable react/prop-types */

const StyledCell = styled.td`
  border-style: solid;
  border-width: 1px;
  border-color: var(--color-silver-700);
  border-radius: 2px;
  border-collapse: collapse;
  justify-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
function RemoveButtonCell({ children }) {
  return <StyledCell>{children}</StyledCell>;
}

export default RemoveButtonCell;
