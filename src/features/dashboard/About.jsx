import styled from 'styled-components';
import { Img } from './Goods';
import about from '../../../public/onama.jpg';
const StyledAbout = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #5c71ce;
  color: #f8f4f1;
  justify-content: space-evenly;
  align-items: center;
`;
const StyledImgContainer = styled.div`
  height: 80%;
  width: 40%;
`;
const StyledTextContainer = styled.div`
  height: 80%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;
const StyledHeading1 = styled.p`
  font-size: 14pt;
  margin-left: 10px;
  color: #2f2817;
  font-variant: stylistic;
`;
const StyledHeading2 = styled.p`
  font-size: 36pt;
  color: #ebc971;
  font-variant: stylistic;
`;
const StyledParagraf = styled.p`
  font-size: auto;
  max-height: 40vh;
  word-wrap: wrap;
  border-bottom: solid 1px #ebc971;
`;
function About() {
  return (
    <StyledAbout>
      <StyledImgContainer>
        <Img src={about} />
      </StyledImgContainer>
      <StyledTextContainer>
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
