import styled from 'styled-components';

import { PiFarmDuotone } from 'react-icons/pi';
import { GiFarmTractor } from 'react-icons/gi';

import gril from '../../../public/net/gril.jpg';
import trad from '../../../public/net/trad.jpg';
import cream from '../../../public/net/cream.jpg';
import milk from '../../../public/net/milk.jpg';
import domaci from '../../../public/net/domaci.jpg';

export const StyledGoods = styled.div`
  display: grid;
  justify-self: center;
  align-self: center;
  justify-items: center;
  align-items: center;
  grid-template-columns: 20vw 20vw 20vw 20vw 20vw;
  grid-template-rows: 25% 10% 10% 37% 10%;
  background-color: #f9f9f7;
  width: 100vw;
  background-size: contain;
  background-position: top center;
  height: 100%;
  column-gap: 2%;
`;
export const StyledHeadLine1 = styled.p`
  align-self: end;
  font-weight: bolder;
  font-size: 12pt;
  text-transform: uppercase;
  color: #5c71ce;
  grid-column: 1/-1;
`;
export const StyledHeadLine2 = styled.p`
  align-self: center;
  font-weight: 600;
  font-size: 40pt;
  color: #caad35;
  grid-column: 1/-1;
`;
export const StyledHeadLine3 = styled.p`
  align-self: end;
  font-weight: 600;
  font-size: 20pt;
  color: #534616;
  grid-column: 1/-1;
  text-transform: lowercase;
`;
export const StyledCheeseImageContainer = styled.div`
  align-self: end;
  height: 100%;
  width: 60%;
  grid-column: 1/-1;
  display: flex;
  justify-content: space-evenly;
  align-content: end;
`;
export const Img = styled.img`
  background-color: #f3ecda;
  border: solid 3px #caad35;
  border-bottom: solid 8px #5c71ce;
  border-radius: 3px;
  width: auto;
  max-height: 100%;
  border-radius: 8px;
`;
export const FootLine = styled.div`
  align-self: start;
  padding-top: 1%;
  font-weight: 600;
  font-size: 24pt;
  color: #5c71ce;
  grid-column: 1/-1;
`;
function Goods() {
  return (
    <StyledGoods>
      <StyledHeadLine1> ~ наши производи ~ </StyledHeadLine1>
      <StyledHeadLine2>Ми нудимо квалитетне сиреве</StyledHeadLine2>
      <StyledHeadLine3></StyledHeadLine3>
      <StyledCheeseImageContainer>
        <Img alt='Грил' src={gril} />
        <Img alt='млеко' src={milk} />
        <Img alt='ситан' src={trad} />
        <Img alt='филије' src={domaci} />
        <Img alt='увара' src={cream} />
      </StyledCheeseImageContainer>
      <FootLine>
        <PiFarmDuotone style={{ fontSize: '30pt' }} />{' '}
        <span> 100% еко производи! </span>
        <GiFarmTractor />
      </FootLine>
    </StyledGoods>
  );
}

export default Goods;
