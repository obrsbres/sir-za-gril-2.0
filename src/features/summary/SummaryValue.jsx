import styled, { css } from 'styled-components';
const types = {
  sum: css`
    justify-self: start;
    display: flex;
    justify-content: flex-start;
    border: solid 2px var(--color-indigo-800);
    font-weight: 500;
    font-size: ${(props) => (props.$isMobile ? '1.5rem' : '2.5rem')};
  `,
  info: css`
    justify-self: start;
    border: solid 1px var(--color-indigo-800);
    display: flex;
    justify-content: flex-start;

    padding: 0px, 5%;
    font-weight: 400;
    font-size: ${(props) => (props.$isMobile ? '1.5rem' : '2rem')};
    color: var(--color-red-800);
  `,
};
const StyledValue = styled.div`
  width: 100%;
  border-radius: 4px;
  background-color: var(--color-red-100);
  border: 1px solid var(--color-yellow-700);
  display: flex;
  align-items: center;
  justify-content: start;
  ${(props) => types[props.type]}
`;
function SummaryValue({ value, type = 'info', $isMobile }) {
  return (
    <StyledValue type={type} $isMobile={$isMobile}>
      {value}
    </StyledValue>
  );
}

export default SummaryValue;
