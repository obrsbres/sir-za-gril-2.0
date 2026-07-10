import styled from 'styled-components';
import React from 'react';
import useScreenWidth from '../hooks/useScreenWidth';

const StyledLogo = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const Img = styled.img`
  height: ${(props) => (props.$pageSize === 'mobile' ? '5rem' : '15rem')};
  width: auto;
`;
const P = styled.p`
  /* font-style: italic;
  font-family: Georgia, 'Times New Roman', Times, serif; */
  font-weight: 600;
  font-size: 2rem;
  color: var(--color-green-700);
`;
function Logo() {
  const pageSize = useScreenWidth();
  const isMobile = pageSize === 'mobile';
  return (
    <StyledLogo>
      {isMobile && <P>НАШ</P>}
      <Img $pageSize={pageSize} src="/logo-sir.png" alt="Logo" />
      {isMobile && <P>СИР</P>}
    </StyledLogo>
  );
}

export default Logo;
