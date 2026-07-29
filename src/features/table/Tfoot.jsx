import styled from 'styled-components';
import React from 'react';

const StyledTFoot = styled.tfoot`
  height: fit-content;
  align-self: stretch;
  display: flex;
  justify-content: start;
`;
function Tfoot({ children }) {
  return <StyledTFoot>{children}</StyledTFoot>;
}

export default Tfoot;
