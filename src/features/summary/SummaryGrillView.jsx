import styled from 'styled-components';

export const StyledGrillLayout = styled.div`
  width: 100%;
  height: 95%;
  background-color: var(--color-grey-200);
  border: 1px solid var(--color-yellow-700);
  border-right: none;
  color: var(--color-indigo-800);
  border-radius: 4px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  grid-row: 2/2;
  grid-column: 1/1;
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 3px;
`;

export function SummaryGrillView({ children }) {
  return <StyledGrillLayout>{children}</StyledGrillLayout>;
}
