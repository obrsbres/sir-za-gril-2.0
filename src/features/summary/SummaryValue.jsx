import styled from 'styled-components';
const StyledValue = styled.div`
  border-radius: 4px;
  background-color: var(--color-grey-200);
  border: 1px solid var(--color-yellow-700);
`;
function SummaryValue({ value }) {
  return <StyledValue>{value}</StyledValue>;
}

export default SummaryValue;
