import styled from 'styled-components';

import SummaryItem from './SummaryItem';
import SummaryValue from './SummaryValue';

const StyledHeading = styled.div`
  width: 95%;
  height: auto;
  font-weight: 600;
  border-radius: 4px;
  grid-row: 1/1;
  grid-column: 1/-1;
  align-self: center;
  justify-self: center;
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: ${(props) => (props.$isMobile ? '1rem' : '2rem')};
  justify-items: center;
`;
function SummaryHeading({ item, value, $isMobile, type }) {
  console.log($isMobile);
  return (
    <StyledHeading $isMobile={$isMobile}>
      <SummaryItem item={item} type={type} $isMobile={$isMobile} />
      {value && (
        <SummaryValue value={value} type={type} $isMobile={$isMobile} />
      )}
    </StyledHeading>
  );
}

export default SummaryHeading;
