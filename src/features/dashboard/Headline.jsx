import styled from 'styled-components';
import { useSelector } from 'react-redux';

import headlineImage from '../../../public/main-background.jpg';
import headlineImageSmall from '../../../public/main-tab-port.jpg';
import FirstBoxHeadline from './FirstBoxHeadline';
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
const SmallStyledHeadline = styled(StyledHedline)`
  background-image: url(${headlineImageSmall});
  background-size: contain;
`;

function Headline() {
  const displaySize = useSelector((state) => state.dashboard.displayWidth);
  if (displaySize === 'tab-port')
    return (
      <SmallStyledHeadline>
        <FirstBoxHeadline />
      </SmallStyledHeadline>
    );

  return (
    <StyledHedline>
      <FirstBoxHeadline />
    </StyledHedline>
  );
}

export default Headline;
