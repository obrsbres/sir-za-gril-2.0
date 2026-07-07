import styled from 'styled-components';
const StyledTable = styled.table`
  width: fit-content;
  height: auto;
  /* padding-left: 4rem; */
  /* padding-top: 2rem; */
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
`;
import React from 'react';

function Table({ children }) {
  return <StyledTable>{children}</StyledTable>;
}

export default Table;
