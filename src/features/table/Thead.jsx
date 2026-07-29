import React from 'react';

import styled from 'styled-components';

const StyledThead = styled.thead`
  width: fit-content;
  height: fit-content;
  align-self: stretch;
  display: flex;
  justify-content: start;
`;
function Thead({ children }) {
  return <StyledThead>{children}</StyledThead>;
}

export default Thead;
