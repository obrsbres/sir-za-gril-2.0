import { useLocation } from 'react-router-dom';

import styled from 'styled-components';

import about from '../../../public/onama.jpg';
import { useEffect } from 'react';
import useNavigateToSection from '../../hooks/useNavigateToSection';
import useScreenWidth from '../../hooks/useScreenWidth';
const StyledAbout = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.$displaySize === 'mobile' ? 'column' : 'row'};
  background-color: #5c71ce;
  color: #f8f4f1;
  justify-content: ${(props) =>
    props.$displaySize === 'mobile' ? 'center' : 'space-evenly'};
  align-items: ${(props) =>
    props.$displaySize === 'mobile' ? 'flex-start' : 'center'};
`;
const StyledImgContainer = styled.div`
  height: ${(props) => (props.$displaySize === 'mobile' ? '30%' : '80%')};
  width: ${(props) => (props.$displaySize === 'mobile' ? '100%' : '40%')};
`;
const StyledTextContainer = styled.div`
  height: ${(props) => (props.$displaySize === 'mobile' ? '70%' : '80%')};
  width: ${(props) => (props.$displaySize === 'mobile' ? '100%' : '40%')};
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;
const StyledHeading1 = styled.p`
  align-self: center;
  font-size: 14pt;
  margin-left: 10px;
  color: #2f2817;
  font-variant: stylistic;
`;
const StyledHeading2 = styled.p`
  align-self: center;
  font-size: ${(props) =>
    props.$displaySize === 'mobile' ? '1.5rem' : '3rem'};
  color: #ebc971;
  font-variant: stylistic;
`;
const StyledParagraf = styled.p`
  padding: 0 5px 2px 5px;
  display: flex;
  align-items: center;
  font-size: auto;
  max-height: 40vh;
  word-wrap: wrap;
  border-bottom: solid 1px #ebc971;
  text-align: justify;
`;

export const Img = styled.img`
  background-color: ${(props) =>
    props.$displaySize === 'mobile' ? '' : ' #f3ecda'};
  border: solid 3px #caad35;
  border-bottom: solid 8px #5c71ce;
  border-radius: 3px;
  width: ${(props) => (props.$displaySize === 'mobile' ? '100vw' : 'auto')};
  max-height: 100%;
  border-radius: 8px;
`;
function About() {
  useNavigateToSection();
  const displaySize = useScreenWidth();
  const isMobile = displaySize === 'mobile';
  return (
    <StyledAbout id="about" $displaySize={displaySize}>
      <StyledImgContainer $displaySize={displaySize}>
        <Img
          $displaySize={displaySize}
          src={isMobile ? '/about2.png' : about}
        />
      </StyledImgContainer>
      <StyledTextContainer $displaySize={displaySize}>
        <StyledHeading1>~ О нама ~</StyledHeading1>
        <StyledHeading2>Наш сир је наш понос</StyledHeading2>
        <StyledParagraf>
          Овде унети текст са рекламеОвде унети текст са рекламе Овде унети
          текст са рекламе Овде унети текст са рекламе Овде унети текст са
          рекламе Овде унети текст са рекламе Овде унети текст са рекламе
        </StyledParagraf>
      </StyledTextContainer>
    </StyledAbout>
  );
}

export default About;
