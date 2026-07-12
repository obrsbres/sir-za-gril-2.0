import styled from 'styled-components';
import { useSelector } from 'react-redux';

import headlineImage from '../../../public/main-background.jpg';
import headlineImageTel from '/main-tel.jpg';
import FirstBoxHeadline from './FirstBoxHeadline';
import useScreenWidth from '../../hooks/useScreenWidth';
const StyledHedline = styled.div`
  display: flex;
  justify-content: start;
  align-items: top;
  flex-direction: row;
  background-image: url(${headlineImage});
  background-size: 100% 100%;
  background-position: top center;
  background-repeat: no-repeat;
  height: 120vh;
  width: 100vw;
`;
const TelStyledHeadline = styled(StyledHedline)`
  background-image: url(${headlineImageTel});
  background-size: contain;
`;

function Headline() {
  const displaySize = useScreenWidth();
  if (displaySize === 'mobile')
    return (
      <TelStyledHeadline>
        <FirstBoxHeadline />
      </TelStyledHeadline>
    );

  return (
    <StyledHedline>
      <FirstBoxHeadline />
    </StyledHedline>
  );
}

export default Headline;
