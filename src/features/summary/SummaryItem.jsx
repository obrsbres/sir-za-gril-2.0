import styled, { css } from 'styled-components';
const types = {
  main: css`
    grid-column: 1/2;
    width: 100%;
    color: var(--color-red-800);
    font-weight: 600;
    font-size: 2.5rem;
    border: solid 2px var(--color-red-800);
    background-color: var(--color-red-100);
    grid-column: 1/-1;
    padding: 1% 3% 1% 3%;
  `,
  section: css`
    width: 70%;
    border: solid 2px var(--color-indigo-800);
    font-size: ${(props) => (props.$isMobile ? '2rem' : '3rem')};
    font-weight: 500;
    padding-left: ${(props) => (props.$isMobile ? '0px' : '10%')};
  `,

  sum: css`
    justify-self: end;
    border: solid 2px var(--color-indigo-800);
    display: flex;
    justify-content: flex-end;

    font-weight: 500;
    font-size: 2.5rem;
  `,
  info: css`
    border: solid 1px var(--color-indigo-800);
    justify-self: end;
    display: flex;
    justify-content: flex-end;

    padding: 0px, 5%;
    font-weight: 400;
    font-size: ${(props) => (props.$isMobile ? '1.5rem' : '2rem')};
  `,
};

const StyledItem = styled.div`
  width: ${(props) => (props.$isMobile ? '100%' : '60%')};
  border-radius: 4px;
  background-color: var(--color-indigo-100);
  border: 1px solid var(--color-yellow-700);
  ${(props) => types[props.type]}
`;
function SummaryItem({ item, type = 'info', $isMobile }) {
  console.log($isMobile);
  return (
    <StyledItem type={type} $isMobile={$isMobile}>
      {item}
    </StyledItem>
  );
}

export default SummaryItem;
