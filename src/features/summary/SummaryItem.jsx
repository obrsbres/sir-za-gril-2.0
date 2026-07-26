import styled from 'styled-components';
const StyledItem = styled.div`
  border-radius: 4px;
  background-color: var(--color-grey-200);
  border: 1px solid var(--color-yellow-700);
`;
function SummaryItem({ item }) {
  return <StyledItem>{item}</StyledItem>;
}

export default SummaryItem;
