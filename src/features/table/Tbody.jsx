import styled from 'styled-components';
import React from 'react';

const StyledTBody = styled.tbody`
  height: fit-content;
  align-self: stretch;
  display: flex;
  justify-content: start;
  flex-direction: column;
`;
function Tbody({ children }) {
  return <StyledTBody>{children}</StyledTBody>;
}

export default Tbody;
