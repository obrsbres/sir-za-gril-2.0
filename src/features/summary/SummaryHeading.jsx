import styled from 'styled-components';

import SummaryItem from './SummaryItem';
import SummaryValue from './SummaryValue';

const StyledHeading = styled.div`
  width: 95%;
  height: auto;
  font-size: ${(props) => (props.$isMobile === 'mobile' ? '1.5rem' : '2.5rem')};
  font-weight: 600;
  border-radius: 4px;
  grid-row: 1/1;
  grid-column: 1/-1;
  align-self: center;
  justify-self: center;
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 2rem;
  /* display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center; */
`;
function SummaryHeading({ item, value, $isMobile }) {
  return (
    <StyledHeading>
      <SummaryItem item={item} />
      {value && <SummaryValue value={value} />}
    </StyledHeading>
  );
}

export default SummaryHeading;
